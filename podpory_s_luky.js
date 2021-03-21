javascript:

if (window.location.href.indexOf('&screen=ally&mode=members') < 0 || window.location.href.indexOf('&screen=ally&mode=members_troops') > -1) {
    //relocate
    window.location.assign(game_data.link_base_pure + "ally&mode=members");
}

var baseURL = `game.php?screen=ally&mode=members_troops&player_id=`;
var playerURLs = [];
var villageData = {};
var playerData = {};
var player = [];
//remove previous ran version of script if accidental doublelaunch
$(".flex-container").remove();
$("div[id*='player']").remove();
//collect all player names/ids
$('input:radio[name=player]').each(function () {
    playerURLs.push(baseURL + $(this).attr("value"));
    player.push({ "id": $(this).attr("value"), "name": $(this).parent().text().trim() });
});

cssClassesSophie = `
<style>
.sophRowA {
padding: 10px;
background-color: #32353b;
color: white;
}

.sophRowB {
padding: 10px;
background-color: #36393f;
color: white;
}
.sophHeader {
padding: 10px;
background-color: #202225;
font-weight: bold;
color: white;
}
.sophTitle {
background-color:  #17181a;
}

.collapsible {
background-color: #32353b;
color: white;
cursor: pointer;
padding: 10px;
width: 100%;
border: none;
text-align: left;
outline: none;
font-size: 15px;
}

.active, .collapsible:hover {
background-color:  #36393f;
}

.collapsible:after {
content: '+';
color: white;
font-weight: bold;
float: right;
margin-left: 5px;
}

.active:after {
content: "-";
}

.content {
padding: 0 5px;
max-height: 0;
overflow: hidden;
transition: max-height 0.2s ease-out;
background-color:  #5b5f66;
color: white;
}

.item-padded {
padding: 5px;
}

.flex-container {
display: flex; 
justify-content: space-between;
align-items:center
}

.submenu{
    display:flex;
    flex-direction:column;
    position: absolute;
    left:566px;
    top:53px;
    min-width:234px;
}
</style>`

$("#contentContainer").eq(0).prepend(cssClassesSophie);
$("#mobileHeader").eq(0).prepend(cssClassesSophie);

$.getAll = function (
    urls, // array of URLs
    onLoad, // called when any URL is loaded, params (index, data)
    onDone, // called when all URLs successfully loaded, no params
    onError // called when a URL load fails or if onLoad throws an exception, params (error)
) {
    var numDone = 0;
    var lastRequestTime = 0;
    var minWaitTime = 200; // ms between requests
    loadNext();
    function loadNext() {
        if (numDone == urls.length) {
            onDone();
            return;
        }

        let now = Date.now();
        let timeElapsed = now - lastRequestTime;
        if (timeElapsed < minWaitTime) {
            let timeRemaining = minWaitTime - timeElapsed;
            setTimeout(loadNext, timeRemaining);
            return;
        }
        $("#progress").css("width", `${(numDone + 1) / urls.length * 100}%`);
        lastRequestTime = now;
        $.get(urls[numDone])
            .done((data) => {
                try {
                    onLoad(numDone, data);
                    ++numDone;
                    loadNext();
                } catch (e) {
                    onError(e);
                }
            })
            .fail((xhr) => {
                onError(xhr);
            })
    }
};

function calculateEverything() {
    //progress bar
    $("#contentContainer").eq(0).prepend(`
    <div id="progressbar" style="width: 100%;
    background-color: #36393f;"><div id="progress" style="width: 0%;
    height: 35px;
    background-color: #4CAF50;
    text-align: center;
    line-height: 32px;
    color: black;"></div>
    </div>`);
    $("#mobileHeader").eq(0).prepend(`
    <div id="progressbar" style="width: 100%;
    background-color: #36393f;"><div id="progress" style="width: 0%;
    height: 35px;
    background-color: #4CAF50;
    text-align: center;
    line-height: 32px;
    color: black;"></div>
    </div>`);

    // collect all data from every player
    $.getAll(playerURLs,
        (i, data) => {
            //console.log("Grabbing player nr " + i);
            //console.log("Grabbing page nr 0");
            
            villageData = {};
            //grab village rows
            if ($(data).find(".paged-nav-item").length == 0) {
                rows = $(data).find(".vis.w100 tr").not(':first');
            }
            else {
                rows = $(data).find(".vis.w100 tr").not(':first').not(":first").not(":last");
            }

            //grab extra pages if there are any
            var allPages = []
            for (var pages = 0; pages < $(data).find(".paged-nav-item").length / 2; pages++) {
                allPages.push($(data).find(".paged-nav-item").eq(pages).attr("href"));
            }
            //console.log(allPages);
            $.getAll(allPages,
                (p, getMore) => {
                    //console.log("Grabbing page nr " + (p+1));
                    
                    if ($(getMore).find(".paged-nav-item").length == 0) {
                        rows = $.merge(rows,$(getMore).find(".vis.w100 tr").not(':first'));
                    }
                    else {
                        rows = $.merge(rows,$(getMore).find(".vis.w100 tr").not(':first').not(":first").not(":last"));
                    }

                },
                () => {
                    //get atacks data
                    $.each(rows, function (rowNr) {
                        thisID = rows.eq(rowNr).find("a")[0].outerHTML.match(/id=(\d*)/)[1];
                        villageData[thisID] = [];
						villageData[thisID]["attacks"] = rows.eq(rowNr).children().not(':first').eq(13).text().trim();
						villageData[thisID]["village"] = rows.eq(rowNr).children().eq(0).text().trim().split("(")[1].split(")")[0];
                    });

                    playerData[player[i].name] = villageData;
                },
                (error) => {
                    console.error(error);
                });



        },
        () => {
            $("#progressbar").remove();
            displayEverything();
        },
        (error) => {
            console.error(error);
        });
}

calculateEverything();


function displayEverything() {
    html = `
    <div class="sophTitle sophHeader flex-container" style="width: 800px;position: relative">
        <div class="sophTitle sophHeader" style="width: 550px;min-width: 520px;"><font size="5">Utoky na kamarady</font></div>
        </div> 
    </div>`;
    $.each(playerData, function (playerName) {
		podUtoky = ''; 
		for (var villageCounter = 0; villageCounter < Object.keys(playerData[playerName]).length-1; villageCounter++) {
					pocetUtoku = playerData[playerName][Object.keys(playerData[playerName])[villageCounter]]["attacks"];
		    if (parseInt(pocetUtoku) === 0 || pocetUtoku === undefined) {
			   continue;
		    }
			vesnice = playerData[playerName][Object.keys(playerData[playerName])[villageCounter]]["village"];
			podUtoky += `<tr><td class="item-padded">` + vesnice + `</td><td class="item-padded"> ___ Počet útoků: ` + pocetUtoku + `</td></tr>`
		}
		if (podUtoky) {
          html += `
          <div id='player${playerName}' class="sophHeader" style="float: left;width: 800px;">
            <p style="padding:10px">${playerName}</p>
            <div class="sophRowA" width="760px">
			<table>`
          html += podUtoky + `</table></div></div>`;
		}
    });

    $("#contentContainer").prepend(html);
}