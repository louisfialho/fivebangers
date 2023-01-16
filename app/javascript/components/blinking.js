const blinking = () => {

  // all of the above could be refactored easily

  const descriptionInput = document.getElementById('edit-description')
  const tracks = document.querySelectorAll(".track-forms");

  descriptionInput.addEventListener('focus', (event) => {
    descriptionInput.style.animation = "blinker 1.5s linear";
    descriptionInput.style['-webkit-animation'] = "blinker 1.5s linear";
  });

  descriptionInput.addEventListener('focusout', (event) => {
    descriptionInput.style.animation = "blinker 1.5s linear infinite";
    descriptionInput.style['-webkit-animation'] = "blinker 1.5s linear infinite";
  });

  tracks.forEach(function(elem) {
    elem.addEventListener("focus", (event) => {
      elem.style.animation = "blinker 1.5s linear";
      elem.style['-webkit-animation'] = "blinker 1.5s linear";
    });
  });

  tracks.forEach(function(elem) {
    elem.addEventListener("focusout", (event) => {
      elem.style.animation = "blinker 1.5s linear infinite";
      elem.style['-webkit-animation'] = "blinker 1.5s linear infinite";
    });
  });

}

export { blinking };
