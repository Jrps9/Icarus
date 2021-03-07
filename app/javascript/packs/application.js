// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
// import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {

  const gouvernailBars = document.querySelector(".gouvernail-bars");
  const gouve = document.querySelector(".active");
  const bars = document.querySelectorAll("span")
  const gouvernailRond = document.querySelector(".gouvernail-rond");
  const gouvernailRond2 = document.querySelector(".gouvernail-rond2");
  const containerBarnav = document.querySelector(".container-barnav");
  const pageOpacity = document.querySelector(".pageOpacity");
  const crewcard = document.querySelectorAll(".crewcard");
  const barnav = document.querySelector(".container-barnav");
  const barnavlink = document.querySelectorAll(".barnavlink");
  const gouvernail = document.querySelector(".gouvernail-container");

  gouvernailBars.addEventListener('click', event => {
    gouvernailBars.classList.toggle("active")
    gouvernailRond.classList.toggle("active")
    gouvernailRond2.classList.toggle("active")
    containerBarnav.classList.toggle("active")
    pageOpacity.classList.toggle("active")
  })

    crewcard.forEach(crew => {
      crew.addEventListener("click", e => {
        if ( crew.classList.value !== "crewcard active") {
          activateur(e);
        } else off(e);
      })
    })

    function off(e) {
      e.currentTarget.classList.remove("active")
    }

    function activateur(e) {
      e.currentTarget.offsetParent.children[0].classList.remove("active")
      e.currentTarget.offsetParent.children[1].classList.remove("active")
      e.currentTarget.offsetParent.children[2].classList.remove("active")
      e.currentTarget.offsetParent.children[3].classList.remove("active")
      e.currentTarget.classList.add("active")
    }

   function redresse(e) {
       if (gouvernailBars.className === "gouvernail-bars active") {
        rotator(e);
       // barnav.addEventListener("mousemove", rotator)
       } else gouvernailBars.style.transform = `rotate(${0}deg)`
   }

   function rotator(e) {
    console.log("coucou")
      barnav.addEventListener("mouseover", rot)
   }

  const walk = 500;
  function rot(e) {
    console.dir(e.currentTarget)
    const { offsetWidth: width, offsetHeight: height} = barnav;
    let { offsetX: x, offsetY: y} = e;

       if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
        }
       const xWalk = Math.round((x / width * walk) - (walk / 2));
       console.log(e.offsetX)
       if (gouvernailBars.className === "gouvernail-bars active") {
        gouvernailBars.style.transform = `rotate(${(x*-1)/15}deg)`
        } else gouvernailBars.style.transform = `rotate(${0}deg)`
  }

  gouvernailBars.addEventListener("click", redresse)

})

