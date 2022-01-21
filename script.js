
var today = moment();
console.log(today);
$("#currentDay").text(today.format("MMM Do, YYYY"));
//var inputData = document.querySelector(".inputData");
//let happening = document.querySelector(".happening");
var inputData = document.getElementsByClassName("inputData");
console.log(inputData);
let hoverTime = document.getElementsByClassName("timeColumn");
// let happening = document.querySelectorAll(".happening").forEach(item => {
//     item.addEventListener("click", clickedHappening => {
//       //handle click
//       console.log("potato");
//       //console.log(clickedHappening);
//       //let happening = document.getElementById(".inputData").style.display=inside;
//     })
//   })

$(document).ready(function(){
    $('.happening').on('click',function(){
        alert('you have clicked!');
        //$(this).css('display','flex');
        $(this).querySelector(".inputData").css('display','flex');
        console.log("potato");
    });
});

//let happening = document.querySelectorAll(".happening").forEach(item => {
///let happening = document.getElementsByClassName("happening").forEach(item => {
   /// $(happening).click(function(event){
//$('a.some-class').click(function() {
    //     switch (this.class) {
    //         case 'one':
    //             console.log("potato");
    //             dataGiven;
    //           break;
    //         // case 'two':
    //         //   // do something
    //         //   break;
    //         // default:
    //         //   // do something
    //         //   break;
    //     }
    // }
    // )};
let hoverSave = document.getElementsByClassName("saveColumn");
var clickedSlot;
var clickedHappening;
//clickedSlot = happening.addEventListener("click", clickedHappening);
//inputData.removeAttribute("class");
//function clickedHappening(){
    //console.log("fajitas");
 //inputData.setAttribute("class","dataGiven");
//};
