const ageInput = document.getElementById('ageInput');
const genderInput = document.getElementById('genderInput');
const countryInput = document.getElementById('countryInput');
const phoneInput = document.getElementById('phoneInput');
const sleepInput = document.getElementById('sleepInput');
const workInput = document.getElementById('workInput');
const submitBtn = document.getElementById('submitBtn');


function submitData(){
  const ageVal = ageInput.value;
  const genderVal = genderInput.value;
  const countryVal = countryInput.value;
  const phoneVal = phoneInput.value;
  const sleepVal = sleepInput.value;
  const workVal = workInput.value;

  console.log(ageVal, genderVal, countryVal, phoneVal, sleepVal, workVal);
}

submitBtn.addEventListener('click', submitData);