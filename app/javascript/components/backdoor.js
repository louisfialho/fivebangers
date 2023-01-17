const backdoor = () => {
  console.log('Welcome to the club')
  const link = document.querySelector('.backdoor-link');
  const logo = document.querySelector('.logo-home');
  const backdoor = document.querySelector('.backdoor-entry');

  link.addEventListener('click', (event) => {
    if (logo.style.display = "flex") {
      logo.style.display = "none";
      backdoor.style.display = "flex";
    } else {
      backdoor.style.display = "none";
      logo.style.display = "flex";
    }
  });
}

export { backdoor }
