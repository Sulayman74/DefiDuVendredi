function mesButtons() {
  let cartes = document.querySelectorAll(".card");
  cartes.forEach((carte) => {
    carte.addEventListener("mouseover", function (e) {
      let boutons = document.querySelectorAll(".play");
      boutons.forEach((bouton) => {
        bouton.classList.add("actif");
        carte.addEventListener("mouseout", function (e) {
          bouton.classList.remove("actif");
        });
      });
    });
  });
}

mesButtons();
// cartes.forEach((carte) => {
//   carte.addEventListener("mouseover", function (e) {
//     document.querySelectorAll(".play").classList.add("actif");
//   });
// });
// playBtn.forEach((bouton) => {
//   bouton.addEventListener("mouseout", function (e) {
//     document.querySelectorAll(".play").classList.remove("actif");
//   });
//   console.log(document.querySelectorAll(".play"));
// });
