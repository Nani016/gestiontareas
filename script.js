const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addTaskBtn');
const boards = document.getElementById('boards');
const message = document.getElementById('message');
const todoList = document.getElementById('todoList');
const doingList = document.getElementById('doingList');
const doneList = document.getElementById('doneList');

function createTask(name) {
  const div = document.createElement('div');
  div.classList.add('task');
  div.textContent = name;

  const btn = document.createElement('button');
  btn.textContent = '→';
  btn.onclick = () => moveTask(div);

  div.appendChild(btn);
  todoList.appendChild(div);
  updateView();
}

function moveTask(task) {
  const parent = task.parentElement;

  if (parent.id === 'todoList') {
    doingList.appendChild(task);
  } else if (parent.id === 'doingList') {
    doneList.appendChild(task);
    task.querySelector('button').remove();
  }
  updateView();
}

function addTask() {
  const name = input.value.trim();
  if (name === '') return;
  createTask(name);
  input.value = '';
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

function updateView() {
  const totalTasks =
    todoList.children.length +
    doingList.children.length +
    doneList.children.length;

  if (totalTasks > 0) {
    message.style.display = 'none';
    boards.style.display = 'flex';
  } else {
    message.style.display = 'block';
    boards.style.display = 'none';
  }
}

updateView();