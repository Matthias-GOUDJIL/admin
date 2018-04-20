var display_clock = document.getElementById('display-clock');
var display_day = document.getElementById('display-day');

var getFrenchDay = function (date) {
    var days_array = ["Dimanche", "lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var months_array = ["Janvier", "février", "mars", "Avril", "mai", "Juin", "Juilllet", "Septembre", "Octobre", "Novembre", "Décembre"]
    var date = new Date();
    var day = date.getDay();
    var month= date.getMonth();

    return days_array[day]+" "+date.getDate()+" "+months_array[month] +" "+ date.getFullYear();
    }

setInterval(function () {
    var current_date = new Date();
    display_day.innerHTML = getFrenchDay(current_date);
    display_clock.innerHTML = current_date.toLocaleTimeString();


}, 1000);

