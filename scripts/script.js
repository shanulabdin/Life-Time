// inputs
const ageInput = document.getElementById('ageInput');
const genderInput = document.getElementById('genderInput');
const countryInput = document.getElementById('countryInput');
const phoneInput = document.getElementById('phoneInput');
const sleepInput = document.getElementById('sleepInput');
const workInput = document.getElementById('workInput');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('userForm');

// If you still need data.js here, keep it. If not, remove this import.
// import { data } from "../scripts/data.js";

submitBtn.disabled = true;

function checkFormValidity(){
  const ageVal = ageInput.value.trim();
  const genderVal = genderInput.value.trim().toLowerCase();
  const countryVal = countryInput.value.trim().toLowerCase();
  const phoneVal = phoneInput.value.trim();
  const sleepVal = sleepInput.value.trim();
  const workVal = workInput.value.trim();

  submitBtn.disabled = !(ageVal && genderVal && countryVal && phoneVal && sleepVal && workVal);
}

[ageInput, genderInput, countryInput, phoneInput, sleepInput, workInput]
  .forEach(el => el.addEventListener('input', checkFormValidity));

// ONE submit flow: handle the form submit (remove any separate click handler)
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const payload = {
    age     : ageInput.value.trim(),
    gender  : genderInput.value.trim(),
    country : countryInput.value.trim().toLowerCase(),
    phone   : phoneInput.value.trim(),
    sleep   : sleepInput.value.trim(),
    work    : workInput.value.trim()
  }

  // See values before navigating
  
  localStorage.setItem('lifeTimeForm', JSON.stringify(payload));
  window.location.href = 'display.html'
});
