function splitDate(str) {
  const r = str.split(" ");
  const d1 = r[0].trim();
  const d2 = r[1].trim();
  if (d1 === "dnes" || d1 === "zítra") {
    return d1;
  } else {
    return d2;
  }
}

const table = document.getElementById("incomings_table");
const resultMap = new Map();
for (let i = 1; i < table.rows.length; i++) {
  const row = table.rows[i];

  if (row.cells.length < 6) {
    continue
  }
  const dateText = row.cells[5].textContent;
  const date = splitDate(dateText)
  if (!resultMap.hasOwnProperty(date)) {
    resultMap[date] = new Map();
  }
  const innerMap = resultMap[date];
  const name = row.cells[3].textContent.trim();
  
  if (innerMap.hasOwnProperty(name)) {
    innerMap[name]++;
  } else {
    innerMap[name] = 1;
  }
}
for (const key in resultMap) {
  const myDiv = document.createElement("div");
  myDiv.innerHTML = "---- " + key;
  $("#incomings_table").before(myDiv)
  for (const key2 in resultMap[key]) {
    const myDiv = document.createElement("div");
    myDiv.innerHTML = key2 + " - " + resultMap[key][key2];
    $("#incomings_table").before(myDiv)
  }
}


