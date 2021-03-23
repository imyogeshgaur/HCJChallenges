// Email validation regex used by webkit:
const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*/i

const form = document.getElementById('signup')
form.addEventListener('change', validateForm)

function validateForm () {
  const errors = []
  if (!form.name.value) {
    errors.push('Name is required')
  }
  if (!emailReg.test(form.email.value)) {
    errors.push('Email is invalid')
  }
  if (!form.password.value || form.cpassword.value.length < 6) {
    errors.push('Password must be 6 characters or more')
  }
  if (form.password.value !== form.cpassword.value) {
    errors.push('Passwords do not match')
  }
  renderErrors(errors)
}

function renderErrors (errors = []) {
  const submitButton = document.querySelector('.submit')
  if (errors.length > 0) {
    submitButton.disabled = true
    errorTemplate = `<ul>
      ${errors.map(error => `<li>${error}</li>`).join('')}
    </ul>`

    document.querySelector('.error').innerHTML = errorTemplate
  } else {
    submitButton.disabled = false
  }
}