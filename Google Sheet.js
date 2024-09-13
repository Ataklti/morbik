const scriptURL = 'https://script.google.com/macros/s/AKfycby1i_KCg0ZXm_ynE_ldly3p4it66kc5cdkEJv7pR3cJC8hsgA2j_9_I7PjIOelrhOvM/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Successfully Registered." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))

})