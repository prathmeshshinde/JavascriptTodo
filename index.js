const todoInput = document.getElementById("todo-input");
const form = document.getElementById("form");
const todoList = document.getElementById("todoList");
var arr = [];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const todo = todoInput.value;

//   if (todo !== "") {
//     arr = [...arr, todo];
//     console.log(arr);
//     todoInput.value = "";
//   } else {
//     alert("Enter A todo");
//   }
//   //   todoList.innerHTML = arr.map((array) => `<li>${array}</li>`);
//   createTodo(arr);
// });

// const createTodo = (arr) => {
//   arr.forEach((todoItem) => {
//     todoList.innerHTML = arr.map((array) => `<li>${array}</li>`);
//     const btn = document.createElement("button");
//     btn.textContent = "Delete";
//     todoList.appendChild(btn);

//     // todoList.innerHTML = arr.map((array) => `<li>${array}</li>`);
//   });
// };

form.addEventListener("submit", (e) => {
  e.preventDefault();
  arr.push(todoInput.value);
  console.log(arr);
  todoInput.value = "";
  showTodoList();
});

const showTodoList = () => {
  todoList.innerHTML = arr
    .map((item, index) => {
      return `<li class="todo-item">
              <input type="checkbox" onchange="toggleCompleted(${index})">
              ${item} 
              <button onclick="deleteTodo(${index})">Delete</button>
            </li>`;
    })
    .join("");
};

const deleteTodo = (index) => {
  arr.splice(index, 1);
  console.log(arr);
  todoList.innerHTML = arr
    .map((item, index) => {
      return `<li class="todo-item">
                <input type="checkbox" onchange="toggleCompleted(${index})">
                ${item} 
                <button onclick="deleteTodo(${index})">Delete</button>
              </li>`;
    })
    .join("");
};

const toggleCompleted = (index) => {
  const todoItem = document.getElementsByClassName("todo-item")[index];
  const checkbox = todoItem.querySelector("input[type='checkbox']");

  if (checkbox.checked) {
    todoItem.style.textDecoration = "line-through";
  } else {
    todoItem.style.textDecoration = "none";
  }
};
