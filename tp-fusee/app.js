const url = "https://randomuser.me/api/?results=4&nat=FR,UK";

// * variable contenant tableau d'objet exemple ici passager

// const passager = [
//   {
//     prenom: "abdelkrim",
//     nom: "pesquet",
//     age: 34,
//   },
//   {
//     prenom: "Joanne",
//     nom: "LaBanane",
//     age: 30,
//   },
//   {
//     prenom: "Akimo",
//     nom: "To",
//     age: 25,
//   },
//   {
//     prenom: "Ariel",
//     nom: "LaPetiteSirene",
//     age: 22,
//   },
//   // {
//   //   prenom: "Bobby",
//   //   nom: "Brown",
//   //   age: 30,
//   // },
//   // {
//   //   prenom: "Roberta",
//   //   nom: "DeNira",
//   //   age: 25,
//   // },
// ];

fetch(url)
  .then((response) => response.json())
  .then(function (data) {
    // * Mon objet fusee avec differents attributs et méthodes
    // ! attribut peut aussi être un objet/ tableau d'objet.

    fusee = {
      reservoir: 0,
      construite: false,
      passagers: [],
      planete: "terre",
      status: "",
      // * création de la méthode qui consiste à "CONSTRUIRE" une fusée

      // TODO changer la valeur de l'attribut construite de false à true et la faire apparaître en HTML CSS

      construireFusee: function () {
        this.construite = true;
        let buildAll = document.querySelector(".fusee");
        let buildTop = document.querySelector(".haut");
        let buildCenter = document.querySelector(".corpsfusee .centre");
        let buildWingL = document.querySelector(".corpsfusee .gauche");
        let buildWingR = document.querySelector(".corpsfusee .droit");
        let buildBottom = document.querySelector(".bas");

        // TODO faire apparaître le vaisseau avec les setTimeout en activant les classes prédéfinies
        this.construite == true ? buildAll.classList.add("active") : null;

        setTimeout(() => {
          buildTop.classList.add("active");
          console.log("construction du vaisseau terminé!");
        }, 2500);
        setTimeout(() => {
          buildCenter.classList.add("active");
        }, 1000);
        setTimeout(() => {
          buildWingL.classList.add("active");
        }, 2000);
        setTimeout(() => {
          buildWingR.classList.add("active");
        }, 2000);
        setTimeout(() => {
          buildBottom.classList.add("active");
        }, 1500);
      },
      // * création de la méthode qui consiste à "REMPLIR" le réservoir = changer la valeur de 0 à 100.
      remplirReservoir: function () {
        // ! si le vaisseau n'existe pas en premier lieu demander sa construction
        // if (this.construite == false) {
        //   console.log(
        //     "please build a ship first... Why do you want to spill the fuel?"
        //   );
        // }
        // * première version en commentaire avec if et seconde avec opérateur terner
        this.construite != true
          ? alert(
              "Oups l'ami, pas de vaisseau pas de carburant!!Please build a ship first... Why do you want to spill the fuel?"
            )
          : (this.reservoir = 100);

        // TODO variable texte à insérer dans l'HTML avec innerText à l'endroit "notification"

        let texte = `"Check Status : Attente état du reservoir à ${this.reservoir}%... En cours"`;
        if (this.reservoir == 100) {
          let notification = document.querySelector(".notif-carbu-ok");
          notification.classList.add("active");
          notification.innerText = texte;

          // * setTimeout pour effacer la notification

          setTimeout(() => {
            notification.classList.remove("active");
            alert("Check status : 100%");
          }, 2000);
        } else {
          console.log(
            "Error!!! Not able to complete the task please check the fuel tank"
          );
        }
      },
      // * On vient créer ici une méthode pour "Ajouter" les passagers qui prend un argument. Ici cet argument est un objet ou tableau d'objet

      ajouterPassager: function (passenger) {
        if (this.passagers.length < 4 && this.construite != false) {
          for (const voyageur of data.results) {
            this.passagers.push(voyageur.name.first);
          }

          console.log("l'équipage se dirige à bord du vaisseau");
          let equipage = document.querySelector(".astronautes");
          equipage.classList.add("active");
          let astro = document.querySelector(".astronautes > p");
          astro.innerText = "👩‍🚀";
          let notification = document.querySelector(".notif-passagers-ok");
          notification.classList.add("active");
          let nom = document.querySelector(".montableau .nom");
          nom.innerText = `${this.passagers[0]}`;
          let nom1 = document.querySelector(".montableau .nom1");
          nom1.innerText = `${this.passagers[1]}`;
          let nom2 = document.querySelector(".montableau .nom2");
          nom2.innerText = `${this.passagers[2]}`;
          let nom3 = document.querySelector(".montableau .nom3");
          nom3.innerText = `${this.passagers[3]}`;
          let texte = `"Check Status : ${passenger.length} astronautes sont présents. \n ${this.passagers}\n sont parés au décollage"`;
          // TODO parcours du tableau objet passagers pour les faire apparaître dans la console
          notification.innerText = texte;
          // * On fait disparaître l'astronaute et la notification au bout de 3s

          setTimeout(() => {
            notification.classList.remove("active");
            equipage.classList.remove("active");
            console.log("l'équipage est à bord du vaisseau, en attente ");
          }, 3100);
        } else {
          this.passagers = [];
          console.log(
            "sorry too much passengers on this flight or please build a ship first... Where do you think the astronauts were going to sit?"
          );
        }
        // * ici la longueur du tableau est comparé car nous ne voulons pas plus de 4 passagers, si il y en a plus que 4 remettre à 0 le tableau
        // ! On vérifie si le vaisseau existe et ensuite on fait rentrer l'équipage notification créée en HTML CSS
      },

      // * création méthode "DECOLLER" avec animation départ de la fusée

      decolage: function () {
        // TODO on vérifie/compare les attributs de l'objet fusee

        if (
          this.reservoir > 0 &&
          this.construite == true &&
          this.passagers.length == 4
        ) {
          let sky = document.querySelector(".sky");
          sky.classList.add("active");
          let launching = document.querySelector(".fusee.active");
          launching.classList.add("decollage");
          this.planete = "";
          this.status = "en vol";
          this.reservoir -= 35;
          // // ? on crée un décompte du carburant
          // const carburant = setInterval(() => {
          //   fusee.reservoir = --fusee.reservoir;
          // }, 1000);
          // setTimeout(() => {
          //   clearInterval(carburant);
          // }, 100000);
          // this.status == "sur une planete" ? clearInterval(carburant) : null;

          console.log("Décollage, c'est parti!!!");
        } else {
          console.log(
            "Sorry we are not able too launch the ship... Something is missing!!!"
          );
        }
      },
      // ? On crée une méthode "ATTERISSAGE" qui fait descendre la fusée en animation, un argument est pris en compte : la planète.

      atterissage: function (choice) {
        // TODO les conditions pour l'execution du code
        choice = prompt("Choose a landing destination please");

        if (this.status == "en vol" && choice != null) {
          let sky = document.querySelector(".sky");
          sky.classList.remove("active");
          let landscape = document.querySelector("body");
          switch (choice) {
            case "jupiter":
              landscape.style.backgroundColor = "gold";
              break;

            case "saturne":
              landscape.style.backgroundColor = "violet";

              break;

            case "mars":
              landscape.style.backgroundColor = "crimson";

              break;

            case "venus":
              landscape.style.backgroundColor = "green";
              break;

            case "lune":
              landscape.style.backgroundColor = "rgb(87, 80, 80)";
              break;
            case "neptune":
              landscape.style.backgroundColor = "purple";
              break;
            case "uranus":
              landscape.style.backgroundColor = "orange";
              break;
            case "terre":
              landscape.style.backgroundColor = "blue";
              break;
            case "mercure":
              landscape.style.backgroundColor = "brown";
              break;

            default:
              landscape.style.backgroundColor = "grey";
              break;
          }
          this.passagers = [];
          this.status = "sur une planete";
          this.planete = choice;
          console.log(`" L'équipage enclenche l'atterissage sur ${choice}"`);
          let landing = document.querySelector(".fusee.active.decollage");
          landing.classList.add("atterissage");
        } else {
          console.log("echec de l'atterissage");
        }
      },
    };
  })

  .catch(function (error) {
    console.log("error");
  });
