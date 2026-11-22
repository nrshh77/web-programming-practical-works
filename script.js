
/* ==================================================
   ПРАКТИЧНА РОБОТА №3
   ТЕМА: РОБОТА З МАСИВАМИ
================================================== */

// Початковий масив чисел
const numbers = [2, 5, 8, 11, 14, 17, 20];

// Функція для обчислення суми елементів масиву
function calculateSum(array) {
    return array.reduce((sum, number) => sum + number, 0);
}

// Відбір парних чисел за допомогою filter()
const evenNumbers = numbers.filter(number => number % 2 === 0);

// Подвоєння кожного числа за допомогою map()
const doubledNumbers = numbers.map(number => number * 2);

// Виведення результатів у консоль
console.log("ПРАКТИЧНА РОБОТА №3");
console.log("Початковий масив:", numbers);
console.log("Сума чисел:", calculateSum(numbers));
console.log("Парні числа:", evenNumbers);
console.log("Подвоєні числа:", doubledNumbers);

// Виведення результатів на вебсторінку
const showResultButton = document.getElementById("show-js-result");
const jsResult = document.getElementById("js-result");

if (showResultButton && jsResult) {
    showResultButton.addEventListener("click", function () {
        jsResult.innerHTML = `
            <p><strong>Початковий масив:</strong> ${numbers.join(", ")}</p>
            <p><strong>Сума чисел:</strong> ${calculateSum(numbers)}</p>
            <p><strong>Парні числа:</strong> ${evenNumbers.join(", ")}</p>
            <p><strong>Подвоєні числа:</strong> ${doubledNumbers.join(", ")}</p>
        `;
    });
}


/* ==================================================
   ПРАКТИЧНА РОБОТА №4
   ТЕМА: DOM ТА ОБРОБКА ПОДІЙ
================================================== */

// Отримання HTML-елементів
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Перевірка наявності потрібних елементів
if (todoForm && todoInput && todoList) {

    // Обробка відправлення форми
    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Отримання тексту справи
        const taskText = todoInput.value.trim();

        // Перевірка порожнього поля
        if (taskText === "") {
            alert("Введіть назву справи!");
            return;
        }

        // Створення нового елемента списку
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Створення кнопки видалення
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Видалити";

        // Обробка натискання кнопки видалення
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });

        // Додавання кнопки до елемента списку
        listItem.appendChild(deleteButton);

        // Додавання справи до списку
        todoList.appendChild(listItem);

        // Очищення поля введення
        todoInput.value = "";
    });
}


/* ==================================================
   ПРАКТИЧНА РОБОТА №5
   ТЕМА: АСИНХРОННІСТЬ ТА FETCH API
================================================== */

// Отримання HTML-елементів
const loadButton = document.getElementById("load-posts");
const postsList = document.getElementById("posts-list");
const errorMessage = document.getElementById("error-message");

// Асинхронна функція для завантаження даних
async function loadPosts() {

    // Перевірка наявності елементів на сторінці
    if (!postsList || !errorMessage) {
        return;
    }

    try {
        // Очищення попередніх результатів
        postsList.innerHTML = "";
        errorMessage.textContent = "Завантаження даних...";

        // Отримання даних із JSONPlaceholder
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );

        // Перевірка успішності запиту
        if (!response.ok) {
            throw new Error("Помилка завантаження даних");
        }

        // Перетворення відповіді у формат JSON
        const posts = await response.json();

        // Очищення повідомлення про завантаження
        errorMessage.textContent = "";

        // Виведення отриманих записів на сторінку
        posts.forEach(function (post) {

            // Створення елемента списку
            const listItem = document.createElement("li");

            // Створення заголовка запису
            const title = document.createElement("strong");
            title.textContent = post.title;

            // Створення опису запису
            const description = document.createElement("p");
            description.textContent = post.body;

            // Додавання заголовка та опису
            listItem.appendChild(title);
            listItem.appendChild(description);

            // Додавання запису до списку
            postsList.appendChild(listItem);
        });

    } catch (error) {

        // Виведення повідомлення про помилку
        errorMessage.textContent =
            "Не вдалося завантажити дані. Перевірте підключення до інтернету.";

        console.error("Помилка:", error);
    }
}

// Обробка натискання кнопки завантаження
if (loadButton && postsList && errorMessage) {
    loadButton.addEventListener("click", loadPosts);
}
