const scriptURL = 'https://script.google.com/macros/s/AKfycbxdmoftE0casyQ9tjkEHIDID3cXtPOX1lHurPoigXvJPDCuYfutK6aZflUAIjSqdDrC/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Form Başarıyla Gönderildi." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})