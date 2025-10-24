const ageInput = document.getElementById('ageInput');
const genderInput = document.getElementById('genderInput');
const countryInput = document.getElementById('countryInput');
const phoneInput = document.getElementById('phoneInput');
const sleepInput = document.getElementById('sleepInput');
const workInput = document.getElementById('workInput');
const submitBtn = document.getElementById('submitBtn');

submitBtn.disabled = true;

function checkFormValidity(){
  const ageVal = ageInput.value.trim();
  const genderVal = genderInput.value.trim();
  const countryVal = countryInput.value.trim();
  const phoneVal = phoneInput.value.trim();
  const sleepVal = sleepInput.value.trim();
  const workVal = workInput.value.trim();

  if(ageVal && genderVal && countryVal && phoneVal && sleepVal && workVal){
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

ageInput.addEventListener('input', checkFormValidity);
genderInput.addEventListener('input', checkFormValidity);
countryInput.addEventListener('input', checkFormValidity);
phoneInput.addEventListener('input', checkFormValidity);
sleepInput.addEventListener('input', checkFormValidity);
workInput.addEventListener('input', checkFormValidity);

function submitData(){
  console.log(
    ageInput.value,
    genderInput.value,
    countryInput.value,
    phoneInput.value,
    sleepInput.value,
    workInput.value
  );
}

submitBtn.addEventListener('click', submitData);