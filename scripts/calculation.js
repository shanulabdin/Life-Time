// Searching from Data
import { data } from "./data.js";

const ageInput = document.querySelector('#ageInput');
const display = document.querySelector('#display');

const countryInput = document.querySelector('#countryInput');
const countryBtn = document.querySelector('#countryBtn');

let country;
function submit(){
  country = countryInput.value.trim().toLowerCase();

  // countryInput.value = '';
  countryInput.focus();

  percentage();
}

function percentage(){
  const ageInputVal = ageInput.value;
  
  let totalAvg;
  
  // Handle Gender Input
  const genderInput = document.querySelector('#genderInput');

  if (genderInput.value === 'undefined'){
    totalAvg = data[country].total;
    console.log(genderInput.value);
  } else if (genderInput.value === 'male'){
    totalAvg = data[country].male;
    console.log(genderInput.value);
  } else if (genderInput.value === 'female'){
    totalAvg = data[country].female;
    console.log(genderInput.value);
  }

  const calcPercentage = ((ageInputVal / totalAvg) * 100).toFixed(2);

  display.innerHTML = `<p>You have lived <strong>${calcPercentage}%</strong> of your estimated life.</p>`
} 

// Handle Submit Button
function handleSubmit(e){
  if((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click'){
    submit();
  }
}

countryBtn.addEventListener('click', handleSubmit);
countryInput.addEventListener('keydown', handleSubmit);


// handle gender input
// function handleGenderInput(){


// }