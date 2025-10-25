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
console.log(payload)


const lifeExpectancy = Math.round(data[country][gender]);
const sleepYears = Math.round((sleep / 24) * (lifeExpectancy - age));
const workYears = Math.round((work / 24) * (lifeExpectancy - age));
const phoneYears = Math.round((phone / 24) * (lifeExpectancy - age));

function renderDots(lived, sleepYears){
  const container = document.getElementById('dots');
  
  let sleepAssigned = 0;
  let workAssigned = 0;
  let phoneAssigned = 0;

  for(let i = 0; i < lifeExpectancy; i++){
    const d = document.createElement('span');
    d.classList.add('dot');
    
    if(i < lived){
      d.classList.add('filled');
    } else if(sleepAssigned < sleepYears){
      d.classList.add('sleep');
      sleepAssigned++;
    } else if(workAssigned < workYears){
      d.classList.add('work');
      workAssigned++;
    } else if(phoneAssigned < phoneYears){
      d.classList.add('phone');
      phoneAssigned++;
    }
    container.appendChild(d);
  }
}
renderDots(age, sleepYears);