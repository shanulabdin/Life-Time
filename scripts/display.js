const raw = localStorage.getItem('lifeTimeForm');

let payload = {};
try {
  payload = raw ? JSON.parse(raw) : {};
} catch (e){
  console.warn('Invalid JSON in localStorage', e);
  payload = {};
}

const { age, gender, country, phone, sleep, work } = payload;
console.log('payload: ', payload);

const out = document.getElementById('out');
out.innerHTML =  `<p>Age: ${age}</p>
                  <p>Gender: ${gender}</p>
                  <p>Country: ${country}</p>
                  <p>Phone Time: ${phone}</p>
                  <p>Sleep: ${sleep}</p>
                  <p>Work: ${work}</p>`;

function renderLifeGridHTML(containerId, percent = 0) {
  const cols = 10, rows = 10, total = cols * rows;
  const filled = Math.round((percent / 100) * total);

  const container = document.getElementById(containerId);
  container.innerHTML = ''; // clear
  for (let i = 0; i < total; i++) {
    const d = document.createElement('span');
    d.className = 'dot' + (i < filled ? ' filled' : '');
    container.appendChild(d);
  }
}

// Example: 63% filled
renderLifeGridHTML('dots', 63);