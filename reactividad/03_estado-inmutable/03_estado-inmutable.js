// Se le agrega el estado al ejercicio

const d = document;

// El state
const state = {
  todoList: [],
  nombre: "",
};

//Template UI
const Template = () => {
  if (state.todoList.length < 1) {
    return `<p>Lista sin tareas por hacer<p>`;
  }

  let todos = state.todoList.map((item) => `<li>${item}</li>`).join("");
  return todos;
};

//Render de UI
const render = () => {
  console.log(state);
  const $list = d.getElementById("todo-list");

  if (!$list) return;
  $list.innerHTML = Template();
};

// Actualizar el State de forma reactiva
const setState = (obj) => {
  for (let key in obj) {
    if (state.hasOwnProperty(key)) {
      state[key] = obj[key];
    }
  }
  render();
};

// Obtendremos una copia inmutable del estado
const getState = () => JSON.parse(JSON.stringify(state));

d.addEventListener("DOMContentLoaded", render);

//Estableciendo valores por defecto
setState({
  todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
  nombre: "Sebastian",
});

// Estado Mutable, porque permite modificar directamente
//creando una copia del objeto y agregando otro elemento
const item = getState();
item.todoList.push("Tarea 4");
console.log("Estado Inmutable", state);

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
