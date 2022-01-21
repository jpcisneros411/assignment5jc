var today = moment();
console.log(today);
$("#currentDay").text(today.format("MMM Do, YYYY"));
//var inputData = document.querySelector(".inputData");
var inputData = document.getElementsByClassName("inputData");
console.log(inputData);
let hoverTime = document.getElementById("timeColumn");
let happening = document.getElementById("happening");
let hoverSave = document.getElementById("saveColumn");
//var clickedSlot;
//clickedHappening;
clickedSlot = happening.addEventListener("click", clickedHappening);
//inputData.removeAttribute("class");
function clickedHappening(){
 inputData.setAttribute("class","dataGiven");
 console.log(potato);
}