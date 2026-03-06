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
const remainingLife = lifeExpectancy - age;

// Validate and cap the daily hours to not exceed 24
const dailyTotal = (sleep || 0) + (work || 0) + (phone || 0) + 2; // 2 for chores
if (dailyTotal > 24) {
  console.warn(`Daily hours exceed 24. Total: ${dailyTotal}. Values will be capped.`);
}

// Calculate years, ensuring they don't exceed remaining life
let sleepYears = Math.round((Math.min(sleep || 0, 24) / 24) * remainingLife);
let workYears = Math.round((Math.min(work || 0, 24) / 24) * remainingLife);
let phoneYears = Math.round((Math.min(phone || 0, 24) / 24) * remainingLife);
let choreYears = Math.round((2 / 24) * remainingLife);

// Ensure total doesn't exceed remaining life
const totalAllocated = sleepYears + workYears + phoneYears + choreYears;

if (totalAllocated > remainingLife) {
  // Scale down proportionally
  const scaleFactor = remainingLife / totalAllocated;
  sleepYears = Math.round(sleepYears * scaleFactor);
  workYears = Math.round(workYears * scaleFactor);
  phoneYears = Math.round(phoneYears * scaleFactor);
  choreYears = Math.round(choreYears * scaleFactor);
}

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
const lifeAfterSleep = remainingLife - sleepYears;
function renderWorkDots(){
  const container = document.getElementById('workDots');

  for(let i = 0; i < Math.max(0, lifeAfterSleep); i++){
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
workText.innerHTML = `<p>About <u>${workYears}</u> years will be spent working.</p>`;

// phone section
const lifeAfterWork = remainingLife - sleepYears - workYears;
function renderPhoneDots(){
  const container = document.getElementById('phoneDots');

  for(let i = 0; i < Math.max(0, lifeAfterWork); i++){
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
phoneText.innerHTML = `<p>Roughly <u>${phoneYears}</u> years of your life will be spent scrolling.</p>`;

// chore section
const lifeAfterPhone = remainingLife - sleepYears - workYears - phoneYears;
function renderChoreSection(){
  const container = document.getElementById('choreDots');

  for(let i = 0; i < Math.max(0, lifeAfterPhone); i++){
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
choreText.innerHTML = `<p>Another <u>${choreYears}</u> years will be spent on eating, drinking, and daily chores.</p>`;

// free section
const lifeAfterChore = Math.max(0, remainingLife - sleepYears - workYears - phoneYears - choreYears);
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
freeText.innerHTML = `<p>That leaves roughly <u>${lifeAfterChore}</u> years that are truly yours. Make them count.</p>`;

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
