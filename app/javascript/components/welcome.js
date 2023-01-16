const welcome = () => {
  const body = document.querySelector("body");
  const startBtn = document.querySelector("#start-btn");
  const paragraphs = document.querySelectorAll(".welcome-text");
  const paragraphsArray = [...paragraphs];
  const musicSource = document.getElementById("music_source");
  const mobileDisplay = window.outerWidth < 850;
  const startLink = document.querySelector("#start-link");

  const handleDeviceClick = (callback) => {
    if (mobileDisplay) {
      body.addEventListener('touchstart', callback);
    } else {
      body.addEventListener('click', callback);
    }
  }

  var simulateClick = function (elem) {
  // Create our event (with options)
    var evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    // If cancelled, don't dispatch our event
    var canceled = !elem.dispatchEvent(evt);
  };

  const handleClick = () => {
    console.log(paragraphsArray.length);
    if (musicSource) {
      musicSource.play();
    }
    if (startBtn) {
      startBtn.style.display = "none";
    }
    if (paragraphsArray.length === 0) {
      simulateClick(startLink);
    }
    if (paragraphsArray.length > 0) {
      let textToDisplay = paragraphsArray.shift();
      textToDisplay.style.display = "block";
      textToDisplay.style.opacity = "1";
    }
  }

  if (paragraphs.length > 0) {
    // Click doesn't work on touch devices
    handleDeviceClick(handleClick);
  }
}

export { welcome };
