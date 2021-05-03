javascript: 
if("report"!==game_data.screen||null==window.location.href.match("view"))
  UI.InfoMessage("Jdi na oznámení!",2e3,"error");
else try {
var text="";
if($("table#attack_info_def")[0].rows[0].cells[1].getElementsByTagName("a")[0].innerHTML==game_data.player.name){
  for(var text="Byl zaznamenán útok z této vesnice dne [b]"+$("table#attack_info_att")[0].parentNode.parentNode.parentNode.rows[1].cells[1].innerHTML.replace(/\s\s+/g,"").split("<")[0]+"[/b]",coslo=$("table#attack_info_att_units")[0].rows[1],coubite=$("table#attack_info_att_units")[0].rows[2],prezilo=new Array,x=1;x<10;){
var a=coslo.cells[x].innerHTML,b=coubite.cells[x].innerHTML;prezilo[x]=parseInt(a)-parseInt(b),x++}
text+="\n[spoiler=Přežilo][unit]spear[/unit] "+prezilo[1]+"\n[unit]sword[/unit] "+prezilo[2]+"\n[unit]axe[/unit] "+prezilo[3]+"\n[unit]spy[/unit] "+prezilo[4]+"\n[unit]light[/unit] "+prezilo[5]+"\n[unit]heavy[/unit] "+prezilo[6]+"\n[unit]ram[/unit] "+prezilo[7]+"\n[unit]catapult[/unit] "+prezilo[8]+"\n[unit]snob[/unit] "+prezilo[9]+"[/spoiler]",text+="[spoiler=Poslal][unit]spear[/unit] "+coslo.cells[1].innerHTML+"\n[unit]sword[/unit] "+coslo.cells[2].innerHTML+"\n[unit]axe[/unit] "+coslo.cells[3].innerHTML+"\n[unit]spy[/unit] "+coslo.cells[4].innerHTML+"\n[unit]light[/unit] "+coslo.cells[5].innerHTML+"\n[unit]heavy[/unit] "+coslo.cells[6].innerHTML+"\n[unit]ram[/unit] "+coslo.cells[7].innerHTML+"\n[unit]catapult[/unit] "+coslo.cells[8].innerHTML+"\n[unit]snob[/unit] "+coslo.cells[9].innerHTML+"[/spoiler]",text+="\n[i]-";
	var ves=$("table#attack_info_att")[0].rows[1].cells[1].getElementsByTagName("span")[0].getAttribute("data-id")
} else {
  var stupen=0;
  // fuckthisshit
  if ($("table#attack_info_def_units")[0].rows[1].getElementsByClassName("unit-item unit-item-axe")[0].innerHTML > 500 
       || $("table#attack_info_def_units")[0].rows[1].getElementsByClassName("unit-item unit-item-light")[0].innerHTML > 500) {
	text += "OFF ";  
  } else if ($("table#attack_info_def_units")[0].rows[1].getElementsByClassName("unit-item unit-item-spear")[0].innerHTML > 500 
       || $("table#attack_info_def_units")[0].rows[1].getElementsByClassName("unit-item unit-item-sword")[0].innerHTML > 500) {
    text += "DEF ";
  }
  text += "[player]" + $("table#attack_info_def")[0].rows[0].cells[1].getElementsByTagName("a")[0].innerHTML + "[/player]\n";
  try{ 
    for(var rows=document.getElementById("attack_spy_buildings_left").getElementsByTagName("tr"),i=1;i<rows.length;i++)
		rows[i].innerHTML.indexOf("Kostel")>-1&&(stupen=rows[i].cells[1].innerHTML)}catch(a){stupen=0}Number(stupen)>0&&(text+="[b]Kostel úroveň "+stupen+"[/b]\n"),text+="Oznámení o útoku ze dne [b]"+$("table#attack_info_def")[0].parentNode.parentNode.parentNode.rows[1].cells[1].innerHTML.replace(/\s\s+/g,"").split("<")[0]+"[/b]";
	var ves=$("table#attack_info_def")[0].rows[1].cells[1].getElementsByTagName("span")[0].getAttribute("data-id");
	text+="\n"+$("#report_export_code")[0].innerHTML,text+="\n[i]-"}TribalWars.post("info_village",

{ajaxaction:"edit_notes",id:ves},
{note:text}),UI.InfoMessage("Oznámení přidáno",2e3,"success")}catch(a){}