// Searching from Data
import { data } from "./data.js";

const ageInput = document.querySelector('#ageInput');
const display = document.querySelector('#display');

const countryInput = document.querySelector('#countryInput');
const countryBtn = document.querySelector('#countryBtn');

let country;
function submit(){
  country = countryInput.value.trim().toLowerCase();

  countryInput.value = '';
  countryInput.focus();

  percentage();
}

function percentage(){
  const ageInputVal = ageInput.value;
  
  const totalAvg = data[country].total;
  const calcPercentage = ((ageInputVal / totalAvg) * 100).toFixed(2);

  display.innerHTML = `<p>You have lived <strong>${calcPercentage}%</strong> of your estimated life.</p>`
}

// Handle Submit Button
function handleSubmit(e){
  if((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click'){
    submit();
  }
  handleGenderInput()
}

countryBtn.addEventListener('click', handleSubmit);
countryInput.addEventListener('keydown', handleSubmit);


// handle gender input
function handleGenderInput(){

  const genderInput = document.querySelector('#genderInput');
  console.log(genderInput.value);
}