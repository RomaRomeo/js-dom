const link = document.querySelector('a');

link.textContent = 'Become tru JS Jedi!';
link.href = 'https://sj42.programmingmentor.com';

const sect = document.querySelector('section');
const para = document.createElement('p');
sect.appendChild(para);
para.textContent = 'We hope you enjoyed the ride.';


// [...Array(100)].forEach( (_, i) => {
//     const p = document.createElement('p');
//     p.textContent = i + '  Lore insu...';
//     sect.appendChild(p);
// });

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';


const clock = document.querySelector('.clock');
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000);

$('.click-me').click( () => $('img').toggle(3000) );


const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', operPressed));

function operPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
    display.value = eval(display.value);
}
