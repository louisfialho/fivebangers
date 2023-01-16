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

import "controllers"
import "bootstrap"

import { errorDisplay } from "../components/error.js";
import { editDescription } from "../components/editDescription.js";
import { editBanger } from "../components/editBanger.js";
import { submitForms } from "../components/submitForms.js";
import { blinking } from "../components/blinking.js";

document.addEventListener('turbolinks:load', () => {

  if (document.querySelector("#edit-description")) {
    editDescription();
    editBanger();
    blinking();
  }

  if (document.querySelector("#save-btn")) {
    submitForms();
  }

  if (document.querySelector(".error-bangers")) {
    errorDisplay();
  }
});
