// life percentage
const [age, estAge] = document.querySelectorAll('input');
const display = document.querySelector('#display');
const calcBtn = document.querySelector('#calcBtn');

function percentage(){
  const ageVal = age.valueAsNumber;
  const estAgeVal = estAge.valueAsNumber;
  if (ageVal > estAgeVal){
    display.innerHTML = `<p style='color: red;'>Age cannot be less than Life Span.</p>`;
    return;
  }

  if(ageVal <= 0){
    display.innerHTML = `<p style='color: red;'>Age must be more than 0.</p>`;
    return;
  }

  const calculate = ((ageVal / estAgeVal) * 100).toFixed(1);
  display.innerHTML = `<p>You've lived ${calculate}% Percent of your life.</p>`;
  age.value = estAge.value = '';
}
calcBtn.addEventListener('click', percentage);


// Searching from Data
import { data } from "./data.js";

const countryInput = document.querySelector('#countryInput');
const countryBtn = document.querySelector('#countryBtn');

function submit(){
  const country = countryInput.value.trim();
  console.log(country, data[country]);

  countryInput.value = '';
  countryInput.focus();
}

// Handle Searching Data
function handleSubmit(e){
  if((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click'){
    submit();
  }
}

countryBtn.addEventListener('click', handleSubmit);
countryInput.addEventListener('keydown', handleSubmit);