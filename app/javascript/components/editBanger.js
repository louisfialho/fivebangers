const editBanger = () => {

  const trackForms = document.querySelectorAll('.track-forms');

  trackForms.forEach(function(elem) {
    elem.addEventListener("paste", function() {

      var clipboardData, pastedData;
      event.stopPropagation();
      event.preventDefault();
      clipboardData = event.clipboardData || window.clipboardData;
      pastedData = clipboardData.getData('Text');

      // if pasted data contains 'youtube'

      if (pastedData.toLowerCase().includes("youtube")) {

        // append 64 characters
        var extendedUrl = pastedData.concat(makeid(60));
        // vider field et remplacer par nv text rallonge
        elem.value = extendedUrl;
        // blur
        elem.blur();

      } else {
        window.location.replace("https://www.5banger5.com/errors/only_youtube_urls");
      }

    });
  });

  function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  }

}

export { editBanger };
