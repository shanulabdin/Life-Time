// Searching from Data
import { data } from "./data.js";

const ageInput = document.querySelector('#ageInput');
const display = document.querySelector('#display');

const countryInput = document.querySelector('#countryInput');
const submitBtn = document.querySelector('#submitBtn');

let country;
let genderInput;
let genderAvg;
let calcPercentage;

// Handle Country Input
function handleCountryInput(){
  country = countryInput.value.trim().toLowerCase();

  countryInput.focus();
  // countryInput.value = '';
}


// Handle Gender Input
function handleGenderInput(){
  const genderInputVal = document.querySelector('#genderInput');
  genderInput = genderInputVal.value;

  if (genderInput === 'person'){
    genderAvg = data[country].total;
  } else if (genderInput === 'male'){
    genderAvg = data[country].male;
  } else if (genderInput === 'female'){
    genderAvg = data[country].female;
  }
}

let yearsOnPhone = 0;
// Handle Phone hours Input
function handlePhoneInput(){
  const phoneHours = Number(document.querySelector('#phoneInput').value);
  const age = Number(document.querySelector('#ageInput').value);
  const genderAvg = 80; // example lifespan

  const remainingYears = genderAvg - age;
  yearsOnPhone = (phoneHours / 24) * remainingYears;

  console.log(`You will spend approximately ${yearsOnPhone.toFixed(2)} years on your phone.`);
}


// Calculate Percentage Function
function percentage(){
  const ageInputVal = ageInput.value;

  calcPercentage = ((ageInputVal / genderAvg) * 100).toFixed(2);
}


// Display Result Function
function displayResult(){
  // display.innerHTML = `<p>You’ve lived <strong>${calcPercentage}%</strong> of your estimated <strong>${genderAvg}</strong>-year lifespan, based on the average life expectancy of a <strong>${genderInput}</strong> in <strong>${country.charAt(0).toUpperCase() + country.slice(1)}</strong>.</p>`;

  display.innerHTML = `<p>You will spend approximately ${yearsOnPhone.toFixed(2)} years on your phone.</p>`;
}

function handleError(){
  if(!data[country] && isNaN(ageInput.value) || ageInput.value <= 0){
    display.innerHTML = `<p class="errorMessage">Please enter a valid age and country name.</p>`;
  } else if(isNaN(ageInput.value) || ageInput.value <= 0){
    display.innerHTML = `<p class="errorMessage">Please enter a valid age.</p>`;
  } else if(!data[country]){
    display.innerHTML = `<p class="errorMessage">Please enter a valid country name.</p>`;
  }
}

// Handle Submit Function
function submit(){
  handleError();
  handleCountryInput();
  handleGenderInput();
  handlePhoneInput();
  percentage();
  displayResult();
}

// Handle Submit Button
function handleSubmit(e){
  if((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click'){
    submit();
  }
}

submitBtn.addEventListener('click', handleSubmit);
countryInput.addEventListener('keydown', handleSubmit);