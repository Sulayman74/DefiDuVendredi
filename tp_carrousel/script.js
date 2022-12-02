

// * Création de mon objet class Carrousel avec constructor et ses propriétés/attributs

class Carrousel {
  // TODO La classe du container sur lequel on construira notre carrousel - Le nombre de slides visibles -Un temps qui permettra de faire tourner le carrousel toutes les x millisecondes.
  constructor(classe = ".container", slides = 0, timing = 2000) {

    let container = document.querySelector(".container");
    this.container = container;
    container.style.overflow = "hidden";
    container.style.width = "980px";
    container.firstElementChild.style.display = "flex";
    container.style.margin = "auto";
    
    let images = container.querySelectorAll("img");


    this.carrousel = container.firstElementChild;
    this.classe = classe;
    this.slides = slides;
    this.timing = timing;
    this.nbrSlides = 1;

    images.forEach((image) => {
      image.style.minWidth = 100 / this.slides + "%";
    });
    // ** Créer un interval qui appelle ma méthode avec un timing choisi en paramètre

    setInterval(() => {
      // this.nextSlide()

    }, this.timing)

  };
  // ? la méthode qui permet de changer de Slide

  nextSlide() {
    this.carrousel.style.transition = "all 0.4s linear"
    this.nbrSlides++
    this.carrousel.style.transform = 'translateX(-' + (100 / this.slides) * this.nbrSlides + '%)';
    console.log((100 / this.slides) * this.nbrSlides);

    setTimeout(() => {
      this.carrousel.style.transition = "all 0s linear";
      let originalDolly = this.carrousel.firstElementChild;
      let Dolly = originalDolly.cloneNode(true);
      this.carrousel.append(Dolly);
      this.container.firstElementChild.firstElementChild.remove(this.carrousel.firstElementChild);
      this.nbrSlides --;
      this.carrousel.style.transform = 'translateX(-' + (100 / this.slides) * this.nbrSlides + '%)';

    }, 400);


  };
prevSlide()


}

// let monCarrousel = new Carrousel(".container", 4, 4000);


