javascript:
var elements = document.getElementsByClassName('quickedit-label');
var budik = 100;
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  console.log(element.innerText);
  if (element.innerText === "Šlechta ") {
  
    element.style.backgroundColor = "red";
    var audio = new Audio('https://cdn.pixabay.com/download/audio/2021/09/27/audio_91211934db.mp3?filename=clock-alarm-8761.mp3');
    audio.play();
	budik = 10000;

  }
}
setTimeout(function() {
  var checkbox = document.getElementById("select_all");
  checkbox.click();
  var buttons = document.getElementsByName("label");
  buttons[0].click();
}, budik);
