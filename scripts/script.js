const ageInput = document.getElementById('ageInput');
const genderInput = document.getElementById('genderInput');
const countryInput = document.getElementById('countryInput');
const phoneInput = document.getElementById('phoneInput');
const sleepInput = document.getElementById('sleepInput');
const workInput = document.getElementById('workInput');
const submitBtn = document.getElementById('submitBtn');

import { data } from "../scripts/data.js";


submitBtn.disabled = true;

let ageVal;
let genderVal;
let countryVal;
let phoneVal;
let sleepVal;
let workVal;

function checkFormValidity(){
  ageVal = ageInput.value.trim();
  genderVal = genderInput.value.trim().toLowerCase();
  countryVal = countryInput.value.trim().toLowerCase();
  phoneVal = phoneInput.value.trim();
  sleepVal = sleepInput.value.trim();
  workVal = workInput.value.trim();

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
  console.log('Age: ', ageVal);
  console.log('Gender: ', genderVal);
  console.log('Country: ', countryVal);
  console.log('Phone: ', phoneVal);
  console.log('Sleep: ', sleepVal);
  console.log('Work:', workVal);
  console.log('Life Expectancy: ', data[countryVal][genderVal]);
}

submitBtn.addEventListener('click', submitData);