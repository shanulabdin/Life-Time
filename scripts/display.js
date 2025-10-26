import { data } from '../scripts/data.js';

const raw = localStorage.getItem('lifeTimeForm');

let payload = {};
try {
  payload = raw ? JSON.parse(raw) : {};
} catch (e){
  console.warn('Invalid JSON in localStorage', e);
  payload = {};
}

const { age, gender, country, phone, sleep, work } = payload;

const lifeExpectancy = Math.round(data[country][gender]);
const sleepYears = Math.round((sleep / 24) * (lifeExpectancy - age));
const workYears = Math.round((work / 24) * (lifeExpectancy - age));
const phoneYears = Math.round((phone / 24) * (lifeExpectancy - age));
const choreYears = Math.round((2 / 24) * (lifeExpectancy - age));
console.log(choreYears);

function renderDots(lived){
  const container = document.getElementById('livedDots');

  for(let i = 0; i < lifeExpectancy; i++){
    const d = document.createElement('span');
    d.classList.add('dot');
    
    if(i < lived){
      d.classList.add('filled');
    }
    container.appendChild(d);
  }
}
renderDots(age, sleepYears);

const livedText = document.querySelector('.livedText');
livedText.innerHTML = `<p>You have already lived <u>${age}</u> years of your expected <u>${lifeExpectancy}</u> years of life.</p>`;

function renderSleepDots(sleepYears){
  const container = document.getElementById('sleepDots');

  let sleepAssigned = 0;

  for(let i = 0; i < lifeExpectancy - age; i++){
    const s = document.createElement('span');
    s.classList.add('dot');
    if(sleepAssigned < sleepYears){
      s.classList.add('sleep');
      sleepAssigned++;
    }
    container.appendChild(s);
  }
} 
renderSleepDots(sleepYears);

const sleepText = document.querySelector('.sleepText');
sleepText.innerHTML = `<p>You have already lived <u>${age}</u> years of your expected <u>${lifeExpectancy}</u> years of life.</p>`;


// function renderWorkDots(){
//   const container = document.getElementById('workDots');


// } 