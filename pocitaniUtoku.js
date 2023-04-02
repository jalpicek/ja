 let table = document.getElementById('incomings_table');
let attacks = {};


for (let i = 1; i < table.rows.length - 1; i++) {
    let attack = table.rows[i].cells[2].innerText;
    if (attacks[attack] === undefined) {
        attacks[attack] = 1;
    } else {
        attacks[attack]++;
    }
}
let attackCount = JSON.parse(JSON.stringify(attacks));

// for (let i = 1; i < table.rows.length - 1; i++) {
for (let i = table.rows.length - 2; i > 0; i--) {
    let attack = table.rows[i].cells[2].innerText;
    let btn = table.rows[i].getElementsByClassName('rename-icon')[0];
    btn.click();
    let renameSpan = table.rows[i].getElementsByClassName("quickedit-edit");
    let previousText = renameSpan[0].childNodes[0].value;
    let index = previousText.indexOf(" ");
    let type = previousText.substr(0, index);
    let custom = previousText.substr(index + 1);
    let pattern = /[0-9]*\/[0-9]*/g;
    custom = custom.replace(pattern, "");
    if (index === -1){
        type = custom;
        custom = "";
    }
    renameSpan[0].childNodes[0].value = type +" "+ String(attackCount[attack]) + "/" + String(attacks[attack]) +" "+ custom;
    attackCount[attack]--;
} 