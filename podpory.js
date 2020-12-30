javascript:
var result = new Array();
var tab = document.getElementById("combined_table");
var trs = tab.getElementsByTagName("tr");
for (i = 1; i < trs.length; i++) {
  tds = trs[i].getElementsByTagName("td");
  for (j = 1; j < tds.length; j++) {
	  if (result[j] === undefined) {
		result[j] = 0; 
	  }
	  result[j] = result[j] + parseInt(tds[j].innerText);
  }
}
var msg = "";
msg += "Kopi - " + result[8] + "\n";
msg += "Mec - " + result[9] + "\n";
msg += "TK - " + result[13] + "\n";
alert(msg);
