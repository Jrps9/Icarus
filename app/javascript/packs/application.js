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
  const gouvernailRond = document.querySelector(".gouvernail-rond");
  const gouvernailRond2 = document.querySelector(".gouvernail-rond2");
  const containerBarnav = document.querySelector(".container-barnav");
  const pageOpacity = document.querySelector(".pageOpacity");
  const crewcard = document.querySelectorAll(".crewcard")

  gouvernailBars.addEventListener('click', event => {
    gouvernailBars.classList.toggle("active")
    gouvernailRond.classList.toggle("active")
    gouvernailRond2.classList.toggle("active")
    containerBarnav.classList.toggle("active")
    pageOpacity.classList.toggle("active")
  })

    crewcard.forEach(crew => {
    crew.addEventListener("click", event => {
      crew.classList.toggle("active")
      console.log(event.currentTarget.closest('.room'))
    })
  })
  document.addEventListener("mousse")

});
