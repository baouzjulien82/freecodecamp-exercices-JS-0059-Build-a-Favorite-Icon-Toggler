// version initiale
const buttons = document.querySelectorAll('.favorite-icon');

const filledOrNot = (btn) => {
  if (btn.classList.contains('filled')) {
    // Si le bouton est déjà rempli → on le vide
    btn.classList.remove('filled');
    btn.innerHTML = '&#9825;'; // cœur vide ♡
  } else {
    // Sinon → on le remplit
    btn.classList.add('filled');
    btn.innerHTML = '&#10084;'; // cœur plein ♥
  }
};

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filledOrNot(btn);
  });
});


// Version améliorée avec toggle

/* const buttons = document.querySelectorAll('.favorite-icon');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Alterne la classe "filled"
    btn.classList.toggle('filled');

    // Change le cœur selon la classe
    btn.innerHTML = btn.classList.contains('filled') ? '&#9829;' : '&#9825;';
  });
});
 */
