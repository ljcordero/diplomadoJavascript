const form = document.getElementById('form');
const list = document.getElementById('list');

const submit = function(event) {
  event.preventDefault();
  
  const element = document.createElement('li');
  element.innerText = `${event.target.title.value} - ${event.target.description.value}`;
  element.classList.add('list-group-item');
  list.appendChild(element);
  event.target.reset();
}

form.addEventListener('submit', submit);
