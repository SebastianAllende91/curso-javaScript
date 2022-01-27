const d = document;
const app = new Component({
  el: "#todo-list",
  data: {
    todoList: [],
  },
  template: function (props) {
    if (props.todoList.length < 1) {
      return `<p>Lista sin tareas por hacer<p>`;
    }

    let todos = props.todoList.map((item) => `<li>${item}</li>`).join("");
    return todos;
  },
});

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
