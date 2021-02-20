const form = document.getElementById('form');
const div = document.getElementById('div');

const submit = function(event) {
  event.preventDefault();

  div.style.backgroundColor = event.target.backgroundColor.value;
  div.style.fontSize = `${event.target.fontSize.value}px`;
  div.style.width = Math.min(event.target.width.value, 200);
  div.style.height = Math.min(event.target.height.value, 200);
}

form.addEventListener('submit', submit);
