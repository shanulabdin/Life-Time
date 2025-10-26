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
livedText.innerHTML = `<p>You've already lived <u>${age}</u> years of your expected <u>${lifeExpectancy}</u> years.</p>`;

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
sleepText.innerHTML = `<p>From the <u>${remainingLife}</u> that remain, about <u>${sleepYears}</u> years will go to sleep.</p>`;

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
workText.innerHTML = `<p>About <u>${workYears}</u> years will be spent working..</p>`;


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
phoneText.innerHTML = `<p>Roughly <u>${phoneYears}</u> years will be spent on scrolling..</p>`;


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
choreText.innerHTML = `<p>Another <u>${choreYears}</u> years will be spent on eating, drinking, and daily chores..</p>`;


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
freeText.innerHTML = `<p>That leaves roughly <u>${lifeAfterChore}</u> years that are truely yours. Make them count..</p>`;


const sections = [...document.querySelectorAll('.page-section')];
const scrollBtn = document.querySelector('.scrollBtn');

scrollBtn.addEventListener('click', () => {
  let nextSection = null;

  for(let i = 0; i < sections.length; i++){
    const next = sections[i].getBoundingClientRect();

    if(next.top > 1){
      nextSection = sections[i];
      break;
    }
  }

  if(!nextSection){
    nextSection = sections[0];
  }
  nextSection.scrollIntoView({
    behavior: 'smooth'
  })
})