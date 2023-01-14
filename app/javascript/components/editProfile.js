const editProfile = () => {

  const link1 = document.getElementById('link-1');
  const cursor1 = document.getElementById('cursor-1');
  const formTrack1 = document.getElementById('form-track-1');
  const inputFormTrack1 = document.getElementById('input-form-1');

  link1.addEventListener('click', function(event) {
    cursor1.style.display = "block";
    link1.style.display = "none";

    document.addEventListener("paste", (event) => {
      var clipboardData, pastedData;
      event.stopPropagation();
      event.preventDefault();
      clipboardData = event.clipboardData || window.clipboardData;
      pastedData = clipboardData.getData('Text');
      inputFormTrack1.value = pastedData;
      formTrack1.submit()
      // reload page
    });
  });

}

export { editProfile };
