// Se le agrega el estado al ejercicio

const d = document;

// El state
const state = {
  todoList: [],
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

d.addEventListener("DOMContentLoaded", render);

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();

  const $item = d.getElementById("todo-item");
  if (!$item) return;

  // Actuaalizar el state y la UI
  state.todoList.push($item.value);
  render();

  //Limpiar el input
  $item.value = "";
  $item.focus();
});
