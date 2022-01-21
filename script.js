let container = $('.container');
let times = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];
let jumbo = $('.jumbotron');
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


//loop that goes through hours
for (let i = 0; i < times.length; i++) {
    //hour array
    let time = times[i];
    
    //hours logic
    let rowSection = $('<section>').addClass('row rounded align-items-center');
    let hours = $('<div>').addClass('time-block col text-center');
    hours.text(time);
    rowSection.append(hours);

    //save button
    let saveThis = $('<div>').addClass('col-lg-3 col text-center align-items-center');
    let savingBtn = $('<button>').addClass('savingBtn');
    savingBtn.attr('date-time', time);
    savingBtn.text('save');
    saveThis.append(savingBtn);
    rowSection.append(saveThis);
    container.append(rowSection);
    savingBtn.on("click", function(){
        localStorage.setItem(time, input.val())
    });
    
    //rolling times
    let now = moment();
    moment().hour();
    let thisHour = moment().hour();
    let hourNumber = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    if (thisHour === hourNumber[i]){
        rowSection.css('background-color', '#ff0000');
    } else if (thisHour < hourNumber[i]) {
        rowSection.css('background-color', '#00FF00');
    } else if (thisHour > hourNumber[i]) {
        rowSection.css('background-color', '#C0C0C0');
    }
    
    //text input
    let inputs = $('<div>').addClass('col-lg-6 col text-center');
    let input = $('<textarea>');
    $(this).attr('cols', '50')
    input.attr('id', time);
    inputs.append(input);
    rowSection.append(inputs);
    let savedText = localStorage.getItem(time);
    input.val(savedText);
}