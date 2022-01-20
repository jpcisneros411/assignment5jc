var today = moment();
console.log(today);
$("#currentDay").text(today.format("MMM Do, YYYY"));

let hoverTime = document.getElementById("timeColumn");
let hoverHappening = document.getElementById("happening");
let hoverSave = document.getElementById("saveColumn");

hoverHappening.addEventListener("click", clickedHappening)

function clickedHappening(){
    
}