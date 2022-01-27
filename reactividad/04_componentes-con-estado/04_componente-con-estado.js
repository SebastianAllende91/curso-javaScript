// Se le agrega el estado al ejercicio

const d = document;

// El state Global
const state = {
  todoList: [],
};

//Template UI
const template = () => {
  if (template.data.todoList.length < 1) {
    return `<p>Lista sin tareas por hacer<p>`;
  }

  let todos = template.data.todoList.map((item) => `<li>${item}</li>`).join("");
  return todos;
};
//Agregar State al Template que genera el Componente de UI (State Local)
template.data = {
  todoList: [],
};

//Render de UI
const render = () => {
  console.log("Estado Global", state);
  console.log("Estado Local", template.data);
  const $list = d.getElementById("todo-list");

  if (!$list) return;
  $list.innerHTML = template();
};

// Actualizar el State de forma reactiva
const setState = (obj) => {
  for (let key in obj) {
    if (template.data.hasOwnProperty(key)) {
      template.data[key] = obj[key];
    }
  }
  render();
};

// Obtendremos una copia inmutable del estado
const getState = () => JSON.parse(JSON.stringify(template.data));

d.addEventListener("DOMContentLoaded", render);

//Estableciendo valores por defecto
setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
});

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();

  const $item = d.getElementById("todo-item");
  if (!$item) return;

  // Actualizar el state de forma reactiva
  const lastState = getState();
  lastState.todoList.push($item.value);
  setState({ todoList: lastState.todoList });

  //Limpiar el input
  $item.value = "";
  $item.focus();
});
