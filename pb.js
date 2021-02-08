javascript:

if (window.location.href.indexOf('premium&mode=log&page=') < 0) {
    //relocate
    window.location.assign(game_data.link_base_pure + "premium&mode=log&page=0");
}

var langShinko = {
    "en_DK": {
        "Purchase": "Purchase", //bought pp, 3rd cell
        "Premium Exchange": "Premium Exchange", //purchases from exchange 3rd cell
        "Points redeemed": "Points redeemed", //reduction building time or account manager/premium account/LA or events, 3rd cell
        "Transfer": "Transfer", //sold to pp exchange 3rd cell
        "Sold": "sold", //text in the last cell when selling res to pp exchange last cell
        "giftTo": "to: ", //gift to last cell
        "giftFrom": "from: ", //gift from last cell
        "Free premium points": "Free premium points", //yearly reward
        "Endgame reward": "Endgame reward", //world reward
        "Manually": "Manually", // Manual refund received
        "Withdrawn": "Withdrawn" // refund received
    },
    "en_GB": {
        "Purchase": "Purchase", //bought pp, 3rd cell
        "Premium Exchange": "Premium Exchange", //purchases from exchange 3rd cell
        "Points redeemed": "Points redeemed", //reduction building time or account manager/premium account/LA or events, 3rd cell
        "Transfer": "Transfer", //sold to pp exchange 3rd cell
        "Sold": "sold", //text in the last cell when selling res to pp exchange last cell
        "giftTo": "to: ", //gift to last cell
        "giftFrom": "from: ", //gift from last cell
        "Free premium points": "Free premium points", //yearly reward
        "Endgame reward": "Endgame reward", //world reward
        "Manually": "Manually", // Manual refund received
        "Withdrawn": "Withdrawn" // refund received
    },
    "en_US": {
        "Purchase": "Purchase", //bought pp, 3rd cell
        "Premium Exchange": "Premium Exchange", //purchases from exchange 3rd cell
        "Points redeemed": "Points redeemed", //reduction building time or account manager/premium account/LA or events, 3rd cell
        "Transfer": "Transfer", //sold to pp exchange 3rd cell
        "Sold": "sold", //text in the last cell when selling res to pp exchange last cell
        "giftTo": "to: ", //gift to last cell
        "giftFrom": "from: ", //gift from last cell
        "Free premium points": "Free premium points", //yearly reward
        "Endgame reward": "Endgame reward", //world reward
        "Manually": "Manually", // Manual refund received
        "Withdrawn": "Withdrawn" // refund received
    },
    "nl_NL": {
        "Purchase": "Koop",
        "Premium Exchange": "Premium Beurs",
        "Points redeemed": "Ingezet",
        "Transfer": "Overdragen",
        "Sold": "Gehandeld voor",
        "giftTo": "to: ",
        "giftFrom": "from: ",
        "Free premium points": "Free premium points", //yearly reward
        "Endgame reward": "Endgame reward", //world reward
        "Manually": "Manually", // Manual refund received
        "Withdrawn": "Withdrawn" // refund received
    },
    "it_IT": {
        "Purchase": "Ottieni",
        "Premium Exchange": "Cambio del Premium",
        "Points redeemed": "Utilizzati",
        "Transfer": "Trasferiti",
        "Sold": "venduto",
        "giftTo": "to: ",
        "giftFrom": "from: ",
        "Free premium points": "Free premium points", //yearly reward
        "Endgame reward": "Endgame reward", //world reward
        "Manually": "Manually", // Manual refund received
        "Withdrawn": "Withdrawn" // refund received
    },
    "el_GR": {
        "Purchase": "Î‘Î³Î¿ÏÎ¬",
        "Premium Exchange": "Î‘Î½Ï„Î±Î»Î»Î±ÎºÏ„Î®ÏÎ¹Î¿",
        "Points redeemed": "Î‘Î»Î»Î±Î³Î® Ï€ÏŒÎ½Ï„Ï‰Î½",
        "Transfer": "ÎœÎµÏ„Î±Ï†Î¿ÏÎ¬",
        "Sold": "Î Î¿Ï…Î»Î®Î¸Î·ÎºÎµ",
        "giftTo": "to:",
        "giftFrom": "from: ",
        "Free premium points": "Free premium points", //yearly reward
        "Endgame reward": "Endgame reward", //world reward
        "Manually": "Manually", // Manual refund received
        "Withdrawn": "Withdrawn" // refund received
    },
    "ar_AE": {
        "Purchase": "Ø´Ø±Ø§Ø¡",
        "Premium Exchange": "Ù…ØµØ±Ù Ù†Ù‚Ø§Ø· Ø§Ù„ØªÙ…ÙŠØ²",
        "Points redeemed": "Ø§Ù„Ù†Ù‚Ø§Ø· Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…Ù‡",
        "Transfer": "Ø§Ø±Ø³Ø§Ù„ ",
        "Sold": " ØªÙ… Ø¨ÙŠØ¹",
        "giftTo": "to:",
        "giftFrom": "from: ",
        "Free premium points": "Free premium points", //yearly reward
        "Endgame reward": "Endgame reward", //world reward
        "Manually": "Manually", // Manual refund received
        "Withdrawn": "Withdrawn" // refund received
    },
    "pt_BR": {
        "Purchase": "Compra",
        "Premium Exchange": "Troca Premium",
        "Points redeemed": "Utilizado",
        "Transfer": "Transferir",
        "Sold": "vendido",
        "giftTo": "to: ",
        "giftFrom": "from: ",
        "Free premium points": "Free premium points", //yearly reward
        "Endgame reward": "Endgame reward", //world reward
        "Manually": "Manually", // Manual refund received
        "Withdrawn": "Withdrawn" // refund received
    },
    "de_DE": {
        "Purchase": "Kauf",
        "Premium Exchange": "Premium-Depot",
        "Points redeemed": " Eingesetzt ",
        "Transfer": "Ãœbertragen",
        "Sold": "verkauft",
        "giftTo": "to: ",
        "giftFrom": "from: ",
        "Free premium points": "Free premium points", //yearly reward
        "Endgame reward": "Endgame reward", //world reward
        "Manually": "Manually", // Manual refund received
        "Withdrawn": "Withdrawn" // refund received
    },
    "sv_SE": {
        "Purchase": "KÃ¶p", //bought pp, 3rd cell
        "Premium Exchange": "PremiumBÃ¶rsen", //purchases from exchange 3rd cell
        "Points redeemed": "UtlÃ¶sta PoÃ¤ng", //reduction building time or account manager/premium account/LA or events, 3rd cell
        "Transfer": "Ã–verfÃ¶r", //sold to pp exchange 3rd cell
        "Sold": "SÃ¥lda", //text in the last cell when selling res to pp exchange last cell
        "giftTo": "to: ", //gift to last cell
        "giftFrom": "from: ", //gift from last cell,
        "Free premium points": "Free premium points", //yearly reward
        "Endgame reward": "Endgame reward", //world reward
        "Manually": "Manually", // Manual refund received
        "Withdrawn": "Withdrawn" // refund received
    },
	"cs_CS": {
        "Purchase": "Koupě",
        "Premium Exchange": "Prémiový trh",
        "Points redeemed": "Nasazen",
        "Transfer": "Převod",
        "Sold": "Prodej",
        "giftTo": "to: ",
        "giftFrom": "from: ",
        "Free premium points": "Free premium points", //yearly reward
        "Endgame reward": "Endgame reward", //world reward
        "Manually": "Manually", // Manual refund received
        "Withdrawn": "Withdrawn" // refund received
	},

}
var worldDataBase = {};

if (game_data.player.sitter > 0) {
    baseURL = "/game.php?t=${game_data.player.id}&screen=premium&mode=log&page=";
}
else {
    baseURL = "/game.php?&screen=premium&mode=log&page=";
}

amountOfPages = parseInt($(".paged-nav-item")[$(".paged-nav-item").length - 1].href.match(/page=(\d+)/)[1]);
let width;
if ($("#contentContainer")[0]) {
    width = $("#contentContainer")[0].clientWidth;
    $("#contentContainer").eq(0).prepend(`
<div id="progressbar" class="progress-bar progress-bar-alive">
<span id="count" class="label">0/${amountOfPages.length}</span>
<div id="progress"><span id="count2" class="label" style="width: ${width}px;">0/${amountOfPages.length}</span></div>
</div>`);
}
else {
    width = $("#mobileHeader")[0].clientWidth;
    $("#mobileHeader").eq(0).prepend(`
<div id="progressbar" class="progress-bar progress-bar-alive">
<span id="count" class="label">0/${amountOfPages.length}</span>
<div id="progress"><span id="count2" class="label" style="width: ${width}px;">0/${amountOfPages.length}</span></div>
</div>`);
}

var URLs = [];
var purchases = [];
var spending = [];
var farmed = [];
var worldReward = [];
var yearlyReward = [];
var refunds = [];
var totalRefunds = 0;
var totalYearlyReward = 0;
var totalBought = 0;
var totalSpent = 0;
var totalFarmed = 0;
var totalGiftsReceived = 0;
var totalWorldReward = 0;
var totalGiftsSent = 0;
var giftTo = [];
var giftFrom = [];
for (var i = 0; i <= amountOfPages; i++) {
    URLs.push(baseURL + i);
}
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
        $("#count").text(`${(numDone + 1)} / ${urls.length}`);
        $("#count2").text(`${(numDone + 1)} / ${urls.length}`);
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


$.getAll(URLs,
    (i, data) => {
        console.log("Grabbing page " + i);
        tempRows = $(data).find("table .vis> tbody > tr");
        var thisPageAmount = 0;
        for (var j = 0; j < tempRows.length - 2; j++) {

            // buying
            if (tempRows[j + 2].children[2].innerText.indexOf(langShinko[game_data.locale]["Purchase"]) > -1) {
                //console.log("Found a purchase!");
                if (typeof worldDataBase[tempRows[j + 2].children[1].innerText] == "undefined") {
                    worldDataBase[tempRows[j + 2].children[1].innerText] = { "Purchases": 0, "Spending": 0, "Farming": 0 };
                }
                purchases.push({ "Date": tempRows[j + 2].children[0].innerText, "World": tempRows[j + 2].children[1].innerText, "Transaction": tempRows[j + 2].children[2].innerText, "Amount": tempRows[j + 2].children[3].innerText, "newTotal": tempRows[j + 2].children[4].innerText, "moreInformation": tempRows[j + 2].children[5].innerText });
                worldDataBase[tempRows[j + 2].children[1].innerText]["Purchases"] += parseInt(tempRows[j + 2].children[3].innerText);
                totalBought += parseInt(tempRows[j + 2].children[3].innerText);
                thisPageAmount++;
            }
            // spending
            if (tempRows[j + 2].children[2].innerText.indexOf(langShinko[game_data.locale]["Premium Exchange"]) > -1 || tempRows[j + 2].children[2].innerText.indexOf(langShinko[game_data.locale]["Points redeemed"]) > -1) {
                //console.log("Found a spending!");
                totalSpent += parseInt(tempRows[j + 2].children[3].innerText);
                if (typeof worldDataBase[tempRows[j + 2].children[1].innerText] == "undefined") {
                    worldDataBase[tempRows[j + 2].children[1].innerText] = { "Purchases": 0, "Spending": 0, "Farming": 0 };
                }
                worldDataBase[tempRows[j + 2].children[1].innerText]["Spending"] += -parseInt(tempRows[j + 2].children[3].innerText);
                thisPageAmount++;
            }
            //pp farm
            if (tempRows[j + 2].children[2].innerText.indexOf(langShinko[game_data.locale]["Transfer"]) > -1 && (tempRows[j + 2].children[5].innerText.indexOf(langShinko[game_data.locale]["Sold"]) > -1 || tempRows[j + 2].children[5].innerText.indexOf(langShinko[game_data.locale]["Premium Exchange"]) > -1)) {
                //console.log("Found a pp farm!");
                if (typeof worldDataBase[tempRows[j + 2].children[1].innerText] == "undefined") {
                    worldDataBase[tempRows[j + 2].children[1].innerText] = { "Purchases": 0, "Spending": 0, "Farming": 0 };
                }
                worldDataBase[tempRows[j + 2].children[1].innerText]["Farming"] += parseInt(tempRows[j + 2].children[3].innerText);
                totalFarmed += parseInt(tempRows[j + 2].children[3].innerText);
                thisPageAmount++;
            }
            // gifted to others
            if (tempRows[j + 2].children[5].innerText.indexOf(langShinko[game_data.locale]["giftTo"]) == 0) {
                //console.log("Found a gift sent!");
                giftTo.push({ "Date": tempRows[j + 2].children[0].innerText, "World": tempRows[j + 2].children[1].innerText, "Transaction": tempRows[j + 2].children[2].innerText, "Amount": tempRows[j + 2].children[3].innerText, "newTotal": tempRows[j + 2].children[4].innerText, "moreInformation": tempRows[j + 2].children[5].innerText })
                totalGiftsSent += -parseInt(tempRows[j + 2].children[3].innerText);
                thisPageAmount++;
            }
            // gifts received
            if (tempRows[j + 2].children[5].innerText.indexOf(langShinko[game_data.locale]["giftFrom"]) > -1) {
                //console.log("Found a gift received!");
                giftFrom.push({ "Date": tempRows[j + 2].children[0].innerText, "World": tempRows[j + 2].children[1].innerText, "Transaction": tempRows[j + 2].children[2].innerText, "Amount": tempRows[j + 2].children[3].innerText, "newTotal": tempRows[j + 2].children[4].innerText, "moreInformation": tempRows[j + 2].children[5].innerText })
                totalGiftsReceived += parseInt(tempRows[j + 2].children[3].innerText);
                thisPageAmount++;
            }
            // yearly reward
            if (tempRows[j + 2].children[2].innerText.indexOf(langShinko[game_data.locale]["Free premium points"]) > -1) {
                //console.log("Found a yearly reward received!");
                yearlyReward.push({ "Date": tempRows[j + 2].children[0].innerText, "World": tempRows[j + 2].children[1].innerText, "Transaction": tempRows[j + 2].children[2].innerText, "Amount": tempRows[j + 2].children[3].innerText, "newTotal": tempRows[j + 2].children[4].innerText, "moreInformation": tempRows[j + 2].children[5].innerText })
                totalYearlyReward += parseInt(tempRows[j + 2].children[3].innerText);
                thisPageAmount++;
            }
            // endgame reward
            if (tempRows[j + 2].children[2].innerText.indexOf(langShinko[game_data.locale]["Endgame reward"]) > -1) {
                //console.log("Found a endgame reward received!");
                worldReward.push({ "Date": tempRows[j + 2].children[0].innerText, "World": tempRows[j + 2].children[1].innerText, "Transaction": tempRows[j + 2].children[2].innerText, "Amount": tempRows[j + 2].children[3].innerText, "newTotal": tempRows[j + 2].children[4].innerText, "moreInformation": tempRows[j + 2].children[5].innerText })
                totalWorldReward += parseInt(tempRows[j + 2].children[3].innerText);
                thisPageAmount++;
            }
            // refunds
            if (tempRows[j + 2].children[2].innerText.indexOf(langShinko[game_data.locale]["Withdrawn"]) > -1 || tempRows[j + 2].children[2].innerText.indexOf(langShinko[game_data.locale]["Manually"]) > -1) {
                //console.log("Found a refund received!");
                refunds.push({ "Date": tempRows[j + 2].children[0].innerText, "World": tempRows[j + 2].children[1].innerText, "Transaction": tempRows[j + 2].children[2].innerText, "Amount": tempRows[j + 2].children[3].innerText, "newTotal": tempRows[j + 2].children[4].innerText, "moreInformation": tempRows[j + 2].children[5].innerText })
                totalRefunds += parseInt(tempRows[j + 2].children[3].innerText);
                thisPageAmount++;
            }


        }
        if (thisPageAmount < tempRows.length - 2) {
            console.log("MISSING ENTRIES ON PAGE " + (i + 1) + ": " + (tempRows.length - 2 - thisPageAmount));
        }
        if (thisPageAmount > tempRows.length - 2) {
            console.log("EXTRA ENTRIES ON PAGE " + (i + 1) + ": " + (thisPageAmount - tempRows.length - 2));
        }
    },
    () => {
        //console.log("Total bought: " + totalBought);
        //console.table(purchases);
        html = `
        <tr>
            <th colspan=7>
                <center>PP Purchase log</center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
            <center><h2>Total pp spent: ${-totalSpent} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
            <center><h2>Total pp farmed: ${totalFarmed} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
                <center><h2>Total pp bought: ${totalBought} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
                <center><h2>Total gifts received: ${totalGiftsReceived} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
                <center><h2>Total gifts sent: ${totalGiftsSent} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
                <center><h2>Total yearly gifts: ${totalYearlyReward} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
                <center><h2>Total world reward: ${totalWorldReward} pp</h2></center>
            </th>
        </tr>
        <tr>
            <th colspan=7>
                <center><h2>Total refunds: ${totalRefunds} pp</h2></center>
            </th>
        </tr>
        <tr>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="overviewButton" onclick="displayCategory('overview')" value="Overview"/>
            </td>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="purchaseHistoryButton" onclick="displayCategory('purchaseHistory')" value="Purchase History"/>
            </td>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="giftReceivedButton" onclick="displayCategory('giftReceived')" value="Gifts received"/>
            </td>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="giftSentButton" onclick="displayCategory('giftSent')" value="Gifts sent"/>
            </td>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="yearlyRewardButton" onclick="displayCategory('yearlyReward')" value="Yearly rewards"/>
            </td>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="worldRewardButton" onclick="displayCategory('worldReward')" value="Win rewards"/>
            </td>
            <td>
                <input type="button" style="display: inline;" class="btn evt-confirm-btn btn-confirm-yes" id="refundButton" onclick="displayCategory('refunds')" value="Refunds"/>
            </td>
        </tr>`;

        //purchase history
        html += `
        <table id="purchaseHistory" class="vis" width="100%">
            <tr>
                <th>
                    Date
                </th>
                <th>
                    World
                </th>
                <th>
                    Transaction
                </th>
                <th>
                    Amount
                </th>
                <th>
                    New total
                </th>
                <th>
                    More information
                </th>
            </tr>`;
        for (var i = 0; i < purchases.length; i++) {
            html += `
            <tr>
                <td>
                    ${purchases[i].Date}
                </td>
                <td>
                    ${purchases[i].World}
                </td>
                <td>
                    ${purchases[i].Transaction}
                </td>
                <td>
                    ${purchases[i].Amount}
                </td>
                <td>
                    ${purchases[i].newTotal}
                </td>
                <td>
                    ${purchases[i].moreInformation}
                </td>
            </tr>`
        }
        html += "</table>";

        //overview
        html += `
        <table id="overview" class="vis" width="100%">
        <tr width="100%">
            <th colspan=2>World</th>
            <th>Purchases</th>
            <th>Spending</th>
            <th>Farmed</th>
            <th>Difference</th>
        </tr>
        `;
        for (var i = 0; i < Object.keys(worldDataBase).length; i++) {
            html += `
            <tr>
                <td colspan=2>${Object.keys(worldDataBase)[i]}</td>
                <td>${worldDataBase[Object.keys(worldDataBase)[i]]["Purchases"]}</td>
                <td>${worldDataBase[Object.keys(worldDataBase)[i]]["Spending"]}</td>
                <td>${worldDataBase[Object.keys(worldDataBase)[i]]["Farming"]}</td>
                <td>${worldDataBase[Object.keys(worldDataBase)[i]]["Farming"] - worldDataBase[Object.keys(worldDataBase)[i]]["Spending"] + worldDataBase[Object.keys(worldDataBase)[i]]["Purchases"]}
            </tr>`
        }
        html += "</table>"


        //gifts received
        html += `
        <table id="giftReceived" class="vis" width="100%">
            <tr width="100%">
                <th>
                    Date
                </th>
                <th>
                    World
                </th>
                <th>
                    Transaction
                </th>
                <th>
                    Amount
                </th>
                <th>
                    New total
                </th>
                <th>
                    More information
                </th>
            </tr>`;
        for (var i = 0; i < giftFrom.length; i++) {
            html += `
            <tr>
                <td>
                    ${giftFrom[i].Date}
                </td>
                <td>
                    ${giftFrom[i].World}
                </td>
                <td>
                    ${giftFrom[i].Transaction}
                </td>
                <td>
                    ${giftFrom[i].Amount}
                </td>
                <td>
                    ${giftFrom[i].newTotal}
                </td>
                <td>
                    ${giftFrom[i].moreInformation}
                </td>
            </tr>`
        }
        html += "</table>";

        //gifts sent
        html += `
        <table id="giftSent" class="vis" width="100%">
            <tr width="100%">
                <th>
                    Date
                </th>
                <th>
                    World
                </th>
                <th>
                    Transaction
                </th>
                <th>
                    Amount
                </th>
                <th>
                    New total
                </th>
                <th>
                    More information
                </th>
            </tr>`;
        for (var i = 0; i < giftTo.length; i++) {
            html += `
            <tr>
                <td>
                    ${giftTo[i].Date}
                </td>
                <td>
                    ${giftTo[i].World}
                </td>
                <td>
                    ${giftTo[i].Transaction}
                </td>
                <td>
                    ${giftTo[i].Amount}
                </td>
                <td>
                    ${giftTo[i].newTotal}
                </td>
                <td>
                    ${giftTo[i].moreInformation}
                </td>
            </tr>`
        }
        html += "</table>";

        //yearly reward
        html += `
         <table id="yearlyReward" class="vis" width="100%">
             <tr width="100%">
                 <th>
                     Date
                 </th>
                 <th>
                     World
                 </th>
                 <th>
                     Transaction
                 </th>
                 <th>
                     Amount
                 </th>
                 <th>
                     New total
                 </th>
                 <th>
                     More information
                 </th>
             </tr>`;
        for (var i = 0; i < yearlyReward.length; i++) {
            html += `
             <tr>
                 <td>
                     ${yearlyReward[i].Date}
                 </td>
                 <td>
                     ${yearlyReward[i].World}
                 </td>
                 <td>
                     ${yearlyReward[i].Transaction}
                 </td>
                 <td>
                     ${yearlyReward[i].Amount}
                 </td>
                 <td>
                     ${yearlyReward[i].newTotal}
                 </td>
                 <td>
                     ${yearlyReward[i].moreInformation}
                 </td>
             </tr>`
        }
        html += "</table>";

        //endgame reward
        html += `
           <table id="worldReward" class="vis" width="100%">
               <tr width="100%">
                   <th>
                       Date
                   </th>
                   <th>
                       World
                   </th>
                   <th>
                       Transaction
                   </th>
                   <th>
                       Amount
                   </th>
                   <th>
                       New total
                   </th>
                   <th>
                       More information
                   </th>
               </tr>`;
        for (var i = 0; i < worldReward.length; i++) {
            html += `
               <tr>
                   <td>
                       ${worldReward[i].Date}
                   </td>
                   <td>
                       ${worldReward[i].World}
                   </td>
                   <td>
                       ${worldReward[i].Transaction}
                   </td>
                   <td>
                       ${worldReward[i].Amount}
                   </td>
                   <td>
                       ${worldReward[i].newTotal}
                   </td>
                   <td>
                       ${worldReward[i].moreInformation}
                   </td>
               </tr>`
        }
        html += "</table>";

        //refunds
        html += `
            <table id="refunds" class="vis" width="100%">
                <tr width="100%">
                    <th>
                        Date
                    </th>
                    <th>
                        World
                    </th>
                    <th>
                        Transaction
                    </th>
                    <th>
                        Amount
                    </th>
                    <th>
                        New total
                    </th>
                    <th>
                        More information
                    </th>
                </tr>`;
        for (var i = 0; i < refunds.length; i++) {
            html += `
                <tr>
                    <td>
                        ${refunds[i].Date}
                    </td>
                    <td>
                        ${refunds[i].World}
                    </td>
                    <td>
                        ${refunds[i].Transaction}
                    </td>
                    <td>
                        ${refunds[i].Amount}
                    </td>
                    <td>
                        ${refunds[i].newTotal}
                    </td>
                    <td>
                        ${refunds[i].moreInformation}
                    </td>
                </tr>`
        }
        html += "</table>";

        $("#progress").remove();
        Dialog.show("Log:", `
        <div width="100%">
            <table class="vis" width="100%">
            ${html}
            </table>
        </div>
        `);
        displayCategory("overview");
    },
    (error) => {
        console.error(error);
    });

function displayCategory(category) {
    allCategories = ["overview", "purchaseHistory", "giftReceived", "giftSent", "worldReward", "yearlyReward", "refunds"]

    $("#" + category).eq(0).css("display", "")
    $("#" + category + "Button").attr("class", "btn evt-cancel-btn btn-confirm-no");
    for (var i = 0; i < allCategories.length; i++) {
        if (category != allCategories[i]) {
            $("#" + allCategories[i]).css("display", "none");
            $("#" + allCategories[i] + "Button").attr("class", "btn evt-confirm-btn btn-confirm-yes");
        }
    }
}
