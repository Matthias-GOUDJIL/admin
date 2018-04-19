var clock = document.getElementById('display-clock');

setInterval(function () {
    var current_date= new Date();
    clock.innerHTML= current_date;

}, 1000);
