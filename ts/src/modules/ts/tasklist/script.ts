const API_URL = 'http://localhost:8080/tasks';

type Task = {
  id: number;
  description: string;
};

const taskList = document.getElementById('task-list')!;
const form = document.getElementById('task-form') as HTMLFormElement;
const input = document.getElementById('task-input') as HTMLInputElement;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!input.value.trim()) return;
  await addTask(input.value);
  input.value = '';
  await loadTasks();
});

async function loadTasks() {
  const res = await fetch(API_URL);
  const tasks: Task[] = await res.json();
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task.description;

    const btnEdit = document.createElement('button');
    btnEdit.textContent = 'Editar';
    btnEdit.onclick = async () => {
      const newDesc = prompt('Nova descrição:', task.description);
      if (newDesc) {
        await updateTask(task.id, newDesc);
        await loadTasks();
      }
    };

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Excluir';
    btnDelete.onclick = async () => {
      await deleteTask(task.id);
      await loadTasks();
    };

    li.appendChild(btnEdit);
    li.appendChild(btnDelete);
    taskList.appendChild(li);
  });
}

async function addTask(description: string) {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
  });
}

async function updateTask(id: number, description: string) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
  });
}

async function deleteTask(id: number) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}

loadTasks();
