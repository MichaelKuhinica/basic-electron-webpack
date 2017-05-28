// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = 'Electron 🍔!';

  return element;
}

document.body.appendChild(component());
