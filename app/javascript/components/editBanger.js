const editBanger = () => {

  const inputFormTrack1 = document.getElementById('input-form-1');
  const formTrack1 = document.getElementById('form-track-1');

  // submit form

  inputFormTrack1.addEventListener("paste", (event) => {
    setTimeout(function(){
      formTrack1.submit()
    }, 500);
  });
}

export { editBanger };
