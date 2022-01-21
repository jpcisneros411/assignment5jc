var today = moment();
console.log(today);
$("#currentDay").text(today.format("MMM Do, YYYY"));
var inputData = document.querySelector(".inputData");
let hoverTime = document.getElementById("timeColumn");
let hoverHappening = document.getElementById("happening");
let hoverSave = document.getElementById("saveColumn");

//hoverHappening.addEventListener("click", clickedHappening)
inputData.removeAttribute("class");
// function clickedHappening(){

// }