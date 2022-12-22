const errorDisplay = () => {
  const error = document.querySelector('.error-bangers');
  let textLines;
  if (error) {
    textLines = error.querySelectorAll("h3");
  }

  let i = 0;

  if (textLines && textLines[i]) {
    setInterval(() => {
      if (textLines[i]) {
        textLines[i].style.display = "block";
        i ++;
      }
    }, 50);
  }
}

export { errorDisplay }
