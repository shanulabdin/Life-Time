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

const out = document.getElementById('out');
out.innerHTML =  `<p>Age: ${age}</p>
                  <p>Gender: ${gender}</p>
                  <p>Country: ${country}</p>
                  <p>Phone Time: ${phone}</p>
                  <p>Sleep: ${sleep}</p>
                  <p>Work: ${work}</p>`;


const lifeExpectancy = Math.round(data[country][gender]);
console.log(lifeExpectancy);
const sleepYears = Math.round((sleep / 24) * (lifeExpectancy - age));
console.log(sleepYears);

function renderDots(lived, sleepYears){
  const container = document.getElementById('dots');
  
  let sleepAssigned = 0;

  for(let i = 0; i < lifeExpectancy; i++){
    const d = document.createElement('span');
    d.classList.add('dot');
    
    if(i < lived){
      d.classList.add('filled');
    } else if(sleepAssigned < sleepYears){
      d.classList.add('sleep');
      sleepAssigned++;
    }
    container.appendChild(d);
  }
}
renderDots(age, sleepYears);