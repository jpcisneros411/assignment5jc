var today = moment();
console.log(today);
$("#currentDay").text(today.format("MMM Do, YYYY"));
//var inputData = document.querySelector(".inputData");
//let happening = document.querySelector(".happening");
var inputData = document.getElementsByClassName("inputData");
console.log(inputData);
let hoverTime = document.getElementsByClassName("timeColumn");
let happening = document.querySelectorAll(".happening").forEach(item => {
    item.addEventListener("click", clickedHappening => {
      //handle click
      console.log("potato");
      console.log(clickedHappening);
      
    })
  })
let hoverSave = document.getElementsByClassName("saveColumn");
var clickedSlot;
var clickedHappening;
//clickedSlot = happening.addEventListener("click", clickedHappening);
//inputData.removeAttribute("class");
//function clickedHappening(){
    //console.log("fajitas");
 //inputData.setAttribute("class","dataGiven");
//}