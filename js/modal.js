var btn_sign = document.getElementById('btn-signIn')
 , btn_inscription = document.getElementById('btn-inscription')
 , btn_deconnexion = document.getElementById('btn-deconnexion')
 , modal_sign_up = document.getElementById('modal-signUp')
 , modal_sign_in = document.getElementById('modal-signIn')
 , btn_retour = Array.from(document.getElementsByClassName('btn-retour'))
 , btn_submit = Array.from(document.getElementsByClassName('btn-submit'))
 , index_content = document.getElementById('content');

// Boutons sign et inscription ***********************************************************
btn_sign.addEventListener('click', function () {
  modal_sign_in.classList.toggle('hidepop');
  if (!modal_sign_up.classList.contains('hidepop')) {
    modal_sign_up.classList.add('hidepop');
  }
  index_content.classList.toggle('hide');
});

btn_inscription.addEventListener('click', function () {
  modal_sign_up.classList.toggle('hidepop');
  modal_sign_in.classList.toggle('hidepop');
});

// Boutons retour et submit **************************************************************
btn_retour.forEach(function (item) {
  item.addEventListener('click', function (e) {
    window.location.reload();
  });
});

btn_submit.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = "html/dashboard.html";
  });
});