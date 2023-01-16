const blinking = () => {

  const descriptionInput = document.getElementById('edit-description')

  descriptionInput.addEventListener('focus', (event) => {
    descriptionInput.style.animation = "blinker 1.5s linear";
    descriptionInput.style['-webkit-animation'] = "blinker 1.5s linear";
    console.log("hi");
  });

  descriptionInput.addEventListener('focusout', (event) => {
    descriptionInput.style.animation = "blinker 1.5s linear infinite";
    descriptionInput.style['-webkit-animation'] = "blinker 1.5s linear infinite";
    console.log("ho");
  });


}

export { blinking };
