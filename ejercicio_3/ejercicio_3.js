const form = document.getElementById('form');
const list = document.getElementById('list');

const submit = function(event) {
  event.preventDefault();

  for (let index = 0; index < event.target.count.value; index++) {
    const element = document.createElement('li');
    element.innerText = `Item ${index + 1}`;
    list.appendChild(element);
  }  
}

form.addEventListener('submit', submit);
