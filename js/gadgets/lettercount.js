var letter_count_input = document.getElementById('lettercount-input')
  , letter_count_btn = document.getElementById('lettercount-btn')
  , result_display= document.getElementById('count')
  , reset_btn= document.getElementById('lettercount-reset');

  
letter_count_btn.addEventListener('click', function (e) {
    result_display.innerHTML = letter_count_input.value + " contient "
                             + letter_count_input.value.length+ " lettres.";
    result_display.style.padding= 10 + "px";
    e.preventDefault();
});

reset_btn.addEventListener('click', function (e) {
    result_display.innerHTML="";
});

