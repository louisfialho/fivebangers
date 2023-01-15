const editBanger = () => {

  const inputFormTrack1 = document.querySelector('.input-form-1');

  inputFormTrack1.addEventListener("paste", (event) => {
    var clipboardData, pastedData;
    event.stopPropagation();
    event.preventDefault();
    clipboardData = event.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('Text');

    // append 64 characters
    var extendedUrl = pastedData.concat(makeid(60));
    // vider field et remplacer par nv text rallonge
    inputFormTrack1.value = extendedUrl;
    // blur
    inputFormTrack1.blur();
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
