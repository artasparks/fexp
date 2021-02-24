const zorp = require('./zorp');

function component() {
  const element = document.createElement('div');

  element.innerHTML = zorp.zorp()

  return element;
}

document.body.appendChild(component());
