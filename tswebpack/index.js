function component() {
  const element = document.createElement('div');
  // seriously? innerHTML? Sigh.
  element.innerHTML = 'Hello webpack'
  return element;
}

document.body.appendChild(component());
