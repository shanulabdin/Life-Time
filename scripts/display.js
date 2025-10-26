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

// lived section
function renderDots(){
  const container = document.getElementById('livedDots');

  for(let i = 0; i < lifeExpectancy; i++){
    const d = document.createElement('span');
    d.classList.add('dot');
    
    if(i < age){
      d.classList.add('filled');
    }
    container.appendChild(d);
  }
}
renderDots();

const livedText = document.querySelector('.livedText');
livedText.innerHTML = `<p>You have already lived <u>${age}</u> years of your expected <u>${lifeExpectancy}</u> years of life.</p>`;

// sleep section
const remainingLife = lifeExpectancy - age;
function renderSleepDots(){
  const container = document.getElementById('sleepDots');

  let sleepAssigned = 0;

  for(let i = 0; i < remainingLife; i++){
    const s = document.createElement('span');
    s.classList.add('dot');
    if(sleepAssigned < sleepYears){
      s.classList.add('sleep');
      sleepAssigned++;
    }
    container.appendChild(s);
  }
} 
renderSleepDots();

const sleepText = document.querySelector('.sleepText');
sleepText.innerHTML = `<p>Sleeping will take <u>${sleepYears}</u> years of your remaining <u>${remainingLife}</u> years.</p>`;

// work section
const lifeAfterSleep = lifeExpectancy - age - sleepYears;
function renderWorkDots(){
  const container = document.getElementById('workDots');

  for(let i = 0; i < lifeAfterSleep; i++){
    const d = document.createElement('span');
    d.classList.add('dot');

    if(i < workYears){
      d.classList.add('work');
    }
    container.appendChild(d);
  }
} 
renderWorkDots();

const workText = document.querySelector('.workText');
workText.innerHTML = `<p>Work will take <u>${workYears}</u> years of your remaining <u>${lifeAfterSleep}</u> years.</p>`;


// phone section
const lifeAfterWork = lifeExpectancy - age - sleepYears - workYears;
function renderPhoneDots(){
  const container = document.getElementById('phoneDots');

  for(let i = 0; i < lifeAfterWork; i++){
    const d = document.createElement('span');
    d.classList.add('dot');

    if(i < phoneYears){
      d.classList.add('phone');
    }
    container.appendChild(d);
  }
}
renderPhoneDots();

const phoneText = document.querySelector('.phoneText');
phoneText.innerHTML = `<p>Phone Time will take <u>${phoneYears}</u> years of your remaining <u>${lifeAfterWork}</u> years.</p>`;


// chore section
const lifeAfterPhone = lifeExpectancy - age - sleepYears - workYears - phoneYears;
function renderChoreSection(){
  const container = document.getElementById('choreDots');

  for(let i = 0; i < lifeAfterPhone; i++){
    const d = document.createElement('span');
    d.classList.add('dot');

    if(i < choreYears){
      d.classList.add('chore');
    }
    container.appendChild(d);
  }
}
renderChoreSection();

const choreText = document.querySelector('.choreText');
choreText.innerHTML = `<p>Eating, drinking and other daily chores will take <u>${choreYears}</u> years of your remaining <u>${lifeAfterPhone}</u> years.</p>`;


// free section
const lifeAfterChore = lifeExpectancy - age - sleepYears - workYears - phoneYears - choreYears;
function renderFreeSection(){
  const container = document.getElementById('freeDots');

  for(let i = 0; i < lifeAfterChore; i++){
    const d = document.createElement('span');
    d.classList.add('dot');
    d.classList.add('free');

    container.appendChild(d);
  }
}
renderFreeSection();

const freeText = document.querySelector('.freeText');
freeText.innerHTML = `<p><u>${lifeAfterChore}</u> years, is the time you actually have for yourself, in these ${lifeAfterChore} years you have to fulfill all your dreams, travel the world, make memories, leave your mark on the world, and do everything you ever wanted to do in this life, ${lifeAfterChore} years is not much, make every moment count.</p>`;


const sections = [...document.querySelectorAll('.page-section')];
document.getElementById('next-btn').addEventListener('click', () => {
  const next = sections.find(s => s.getBoundingClientRect().top > 1) || sections[0];
  next.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
