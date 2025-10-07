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
}

countryBtn.addEventListener('click', handleSubmit);
countryInput.addEventListener('keydown', handleSubmit);

// Old code
  // const maleAvg = data[country].male;
  // const femaleAvg = data[country].female;

  // life percentage
  // const [age, estAge] = document.querySelectorAll('input');
  // const display = document.querySelector('#display');
  // const calcBtn = document.querySelector('#calcBtn');

  // function percentage(){
  //   const ageVal = age.valueAsNumber;
  //   const estAgeVal = estAge.valueAsNumber;
  //   if (ageVal > estAgeVal){
  //     display.innerHTML = `<p style='color: red;'>Age cannot be less than Life Span.</p>`;
  //     return;
  //   }

  //   if(ageVal <= 0){
  //     display.innerHTML = `<p style='color: red;'>Age must be more than 0.</p>`;
  //     return;
  //   }

  //   const calculate = ((ageVal / estAgeVal) * 100).toFixed(1);
  //   display.innerHTML = `<p>You've lived ${calculate}% Percent of your life.</p>`;
  //   age.value = estAge.value = '';
  // }
  // calcBtn.addEventListener('click', percentage);