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

// const out = document.getElementById('out');
// out.innerHTML =  `<p>Age: ${age}</p>
//                   <p>Gender: ${gender}</p>
//                   <p>Country: ${country}</p>
//                   <p>Phone Time: ${phone}</p>
//                   <p>Sleep: ${sleep}</p>
//                   <p>Work: ${work}</p>`;

function renderDots(filled){
  const years = 100;
  const container = document.getElementById('dots');
  
  for(let i = 0; i < years; i++){
    const d = document.createElement('span');
    d.classList.add('dot');
    container.appendChild(d);

    if(i < filled){
      d.classList.add('filled');
    }
  }
}
renderDots(13);