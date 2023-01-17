const passwordFont = () => {
  const form = document.querySelector(".form-backdoor");
  let mobileDisplay = window.outerWidth < 850;
  let ipadDisplay = window.outerWidth < 850 && window.outerWidth > 767;
  let input;

  if (form) {
    input = form.querySelector("input[type='password']");
  }

  if (input && !mobileDisplay && !ipadDisplay) {
    input.addEventListener('click', () => {
      input.placeholder = "";
      input.style.fontFamily = "Smileys";
      input.style.fontSize = "32px";
    })
  }
  // console.log(input);
}

export { passwordFont };
