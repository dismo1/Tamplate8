let ab = 0;
function iconsfn() {
  ab += .5;
  if (!Number.isInteger(ab)) {
    let links = document.getElementById('links');
    links.style["transition"] = '1s';
    links.style["transition-property"] = 'margin-top';
    links.style["margin-top"] = '0px';
  }
  else {
    let links = document.getElementById('links');
  links.style["transition"] = '1s';
  links.style["transition-property"] = 'margin-top';
  links.style["margin-top"] = '-175px';

  }
}
