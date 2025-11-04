const buttons = document.querySelectorAll('favorite-icon');

const filledOrNot = (btn) => {

};

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filledOrNot(btn);
  });
});
