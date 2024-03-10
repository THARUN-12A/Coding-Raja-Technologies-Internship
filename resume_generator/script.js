function addNewWEField() {
    // console.log("Adding new field")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows", 3);


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.setAttribute("rows", 3);


    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function generateCV() {
    // console.log("generating CV")


    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;
    document.getElementById('nameT2').innerHTML = nameField;
    document.getElementById('contactT').innerHTML = document.getElementById('ContactField').value;
    document.getElementById('addressT').innerHTML = document.getElementById('AddressField').value;
    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;
    document.getElementById('instaT').innerHTML = document.getElementById('InstaField').value;
    document.getElementById('LinkedInT').innerHTML = document.getElementById('LinkedInField').value;
    document.getElementById('ObjectiveT').innerHTML = document.getElementById('ObjectiveField').value;
    let wes = document.getElementsByClassName('weField')
    let str = '';

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;
    let aqs = document.getElementsByClassName('eqField');

    let str1 = '';
    for (let e of aqs) {
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = str1;



    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}
function printCV() {
    window.print();
}
