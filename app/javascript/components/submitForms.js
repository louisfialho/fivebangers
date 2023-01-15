const submitForms = () => {

  const saveBtn = document.getElementById('save-btn')

  saveBtn.addEventListener('click', (event) => {
    // select and submit all forms on the page Select all elements type form
    var forms = document.getElementsByTagName("FORM");
    for (var i=0; i<forms.length; i++)
    forms[i].submit();
    // Redirect to user profile (need to receive user id data voir le wagon)
  });

}

export { submitForms };
