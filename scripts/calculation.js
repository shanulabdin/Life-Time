// life percentage
const [age, estAge] = document.querySelectorAll('input');
const display = document.querySelector('#display');
const calcBtn = document.querySelector('#calcBtn');

function percentage(){
  const calculate = ((age.valueAsNumber / estAge.valueAsNumber) * 100).toFixed(1);
  display.innerHTML = `<p>You've lived ${calculate}% Percent of your life.</p>`;
  age.value = estAge.value = '';
}
calcBtn.addEventListener('click', percentage)