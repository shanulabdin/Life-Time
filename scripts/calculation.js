// Searching from Data
import { data } from "./data.js";

const ageInput = document.querySelector('#ageInput');
const display = document.querySelector('#display');

const countryInput = document.querySelector('#countryInput');
const countryBtn = document.querySelector('#countryBtn');

let country;
let totalAvg;
let calcPercentage;
let genderInput;


// Handle Submit Function
function submit(){
  country = countryInput.value.trim().toLowerCase();
  countryInput.focus();
  percentage();
  handleGenderInput();
  displayResult();
}

// Calculate Percentage Function
function percentage(){
  const ageInputVal = ageInput.value;

  calcPercentage = ((ageInputVal / totalAvg) * 100).toFixed(2);
  console.log(country.charAt(0).toUpperCase() + country.slice(1));
}

function displayResult(){
  display.innerHTML = `<p>You have lived <strong>${calcPercentage}%</strong> of your estimated life as per average life expectancy of an average <strong>${genderInput}</strong> living in <strong>${country.charAt(0).toUpperCase() + country.slice(1)}</strong>, which is <strong>${totalAvg}</strong> years .</p>`;
}

// Handle Gender Input
function handleGenderInput(){
  const genderInputVal = document.querySelector('#genderInput');
  genderInput = genderInputVal.value;

  if (genderInput.value === 'person'){
    totalAvg = data[country].total;
  } else if (genderInput.value === 'male'){
    totalAvg = data[country].male;
  } else if (genderInput.value === 'female'){
    totalAvg = data[country].female;
  }
}
// Handle Submit Button
function handleSubmit(e){
  if((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click'){
    submit();
  }
}

countryBtn.addEventListener('click', handleSubmit);
countryInput.addEventListener('keydown', handleSubmit);