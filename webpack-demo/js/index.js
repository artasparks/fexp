import Hi from './hi.js';

function component(s) {
  const element = document.createElement('div');
  element.innerHTML = s
  return element;
}

document.body.appendChild(component(Hi.getHi()));
document.body.appendChild(component(Hi.zep()));
