async function fetchTasks() {
  const res = await fetch('/api/todos');
  const data = await res.json();

  const list = document.getElementById('taskList');
  list.innerHTML = '';

  data.todos.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.onclick = () => deleteTask(index);
    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();

  if (!task) return;

  await fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task })
  });

  input.value = '';
  fetchTasks();
}

async function deleteTask(index) {
  await fetch('/api/todos', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ index })
  });

  fetchTasks();
}

fetchTasks();
