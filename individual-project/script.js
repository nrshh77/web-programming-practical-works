```javascript
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const count = document.getElementById('task-count');
const filterButtons = document.querySelectorAll('.filters button');

// Завантаження завдань зі сховища
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let currentFilter = 'all';

// Збереження завдань
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Відображення кількості завдань
function updateCount() {
    const activeTasks = tasks.filter(task => !task.completed).length;
    count.textContent = `Усього завдань: ${tasks.length} | Активних: ${activeTasks}`;
}

// Відображення списку
function renderTasks() {
    list.innerHTML = '';

    const filteredTasks = tasks.filter(task => {
        if (currentFilter === 'active') {
            return !task.completed;
        }

        if (currentFilter === 'completed') {
            return task.completed;
        }

        return true;
    });

    filteredTasks.forEach(task => {
        const li = document.createElement('li');

        if (task.completed) {
            li.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;

        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        const span = document.createElement('span');
        span.textContent = task.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';

        deleteButton.addEventListener('click', () => {
            tasks = tasks.filter(item => item.id !== task.id);
            saveTasks();
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        list.appendChild(li);
    });

    updateCount();
}

// Додавання нового завдання
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const text = input.value.trim();

    if (text === '') {
        return;
    }

    tasks.push({
        id: Date.now(),
        text: text,
        completed: false
    });

    saveTasks();
    renderTasks();

    input.value = '';
});

// Фільтри завдань
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentFilter = button.dataset.filter;
        renderTasks();
    });
});

// Початкове відображення
renderTasks();
```
