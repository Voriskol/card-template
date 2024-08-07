const button = document.getElementById("card__button");
button.addEventListener("click", () => {
  const textBody = document.querySelector(".card__text");
  const arrow = document.querySelector(".card__button__arrow");
  arrow.classList.toggle("card__button__arrow--rotate");
  textBody.classList.toggle("card__text--full");
});
