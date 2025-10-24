import { data } from "../scripts/data.js"; // adjust path relative to display.js

const out = document.getElementById('out');

// read params
const q = new URLSearchParams(location.search);
const age     = Number(q.get('age') || 0);
const gender  = (q.get('gender') || '').toLowerCase();
const country = (q.get('country') || '').toLowerCase();
const phone   = q.get('phone');
const sleep   = q.get('sleep');
const work    = q.get('work');

// compute using your data structure, e.g. data[country][gender]
const lifeExpectancy = data?.[country]?.[gender];

let html = `
  <p><strong>Age:</strong> ${age}</p>
  <p><strong>Gender:</strong> ${gender}</p>
  <p><strong>Country:</strong> ${country}</p>
  <p><strong>Phone:</strong> ${phone} hrs/day</p>
  <p><strong>Sleep:</strong> ${sleep} hrs/night</p>
  <p><strong>Work:</strong> ${work} hrs/day</p>
`;

if (lifeExpectancy !== undefined) {
  const yearsLeft = Math.max(0, lifeExpectancy - age);
  html += `
    <hr/>
    <p><strong>Life Expectancy:</strong> ${lifeExpectancy}</p>
    <p><strong>Estimated Years Left:</strong> ${yearsLeft}</p>
  `;
} else {
  html += `
    <hr/>
    <p style="color:crimson"><strong>No life expectancy data</strong> for country “${country}” and gender “${gender}”.</p>
  `;
}

out.innerHTML = html;
