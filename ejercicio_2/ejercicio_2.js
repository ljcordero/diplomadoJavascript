const form = document.getElementById('form');

const submit = function(event) {
  event.preventDefault();

  document.body.style.backgroundColor = event.target.backgroundColor.value;
  document.body.style.fontSize = event.target.fontSize.value;
}

form.addEventListener('submit', submit);
