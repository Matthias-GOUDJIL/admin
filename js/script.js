var btn_sign= document.getElementById('btn-signIn');

var modal_sign_up=      document.getElementById('modal-signUp');
var modal_sign_in=      document.getElementById('modal-signIn');
var btn_inscription=    document.getElementById('btn-inscription');
var btn_retour=         Array.from(document.getElementsByClassName('btn-retour'));
var btn_submit=         Array.from(document.getElementsByClassName('btn-submit'));
var btn_deconnexion=    document.getElementById('btn-deconnexion');

btn_sign.addEventListener('click',  function () {
    modal_sign_in.classList.toggle('hidepop');
    if (!modal_sign_up.classList.contains('hidepop')) {
        modal_sign_up.classList.add('hidepop');    
    }
});

btn_inscription.addEventListener('click', function () {
    modal_sign_up.classList.toggle('hidepop');
    modal_sign_in.classList.toggle('hidepop');
  });

  btn_retour.forEach(function(item) {
    item.addEventListener('click', function (e) {
        window.location.reload();
    });
  });

  btn_submit.forEach(function(item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href="html/dashboard.html";
    });
  });
