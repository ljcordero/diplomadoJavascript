const list = document.getElementById("list");
const form = document.getElementById("form");
const submitButton = document.getElementById("submitButton");

let tasks = [];

const render = () => {
  list.innerHTML = "";

  tasks.forEach((task, i) => {
    const item = document.createElement("li");
    item.classList.add("list-group-item");

    const title = document.createElement("p");
    title.innerText = task.title;

    const description = document.createElement("p");
    description.innerText = task.description;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "m-1");
    deleteButton.innerText = "ELIMINAR";
    deleteButton.addEventListener("click", () => {
      if (confirm("Seguro que desea eliminar esta tarea ?")) {
        deleteItem(i);
      }
    });

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-primary");
    editButton.innerText = "EDITAR";
    editButton.addEventListener("click", () => {
      editItem(task);
    });

    item.append(title, description, editButton, deleteButton);
    list.append(item);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const deleteItem = (i) => {
  tasks.splice(i, 1);
  render();
};

const editItem = (task) => {
  form.elements["id"].value = task.id;
  form.elements["title"].value = task.title;
  form.elements["description"].value = task.description;

  submitButton.innerText = "ACTUALIZAR";
};

const submit = (event) => {
  event.preventDefault();
  submitButton.innerText = "AGREGAR";

  if (!!event.target.id.value) {
    const i = tasks.findIndex((task) => task.id === event.target.id.value);

    if (i != -1) {
      tasks[i] = {
        id: event.target.id.value,
        title: event.target.title.value,
        description: event.target.description.value,
      };
    }
  } else {
    tasks.push({
      id: uuidv4(),
      title: event.target.title.value,
      description: event.target.description.value,
    });
  }

  render();
  event.target.reset();
};

const loadTasks = () => {
  tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  render();
};

form.addEventListener("submit", submit);
window.onload = loadTasks();
