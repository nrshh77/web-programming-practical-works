
-- Практична робота №6
-- Основи SQL

-- 1. Створення таблиці студентів
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    "group" VARCHAR(50),
    mark INT
);

-- 2. Додавання тестових студентів
INSERT INTO students (id, name, "group", mark)
VALUES
(1, 'Анна', 'ПЗ-21', 95),
(2, 'Олег', 'ПЗ-21', 78),
(3, 'Марія', 'ПЗ-22', 88),
(4, 'Іван', 'ПЗ-22', 72);

-- 3. Вибір студентів з оцінкою вище 80
-- Сортування за іменем
SELECT *
FROM students
WHERE mark > 80
ORDER BY name ASC;

-- 4. Оновлення оцінки студента
UPDATE students
SET mark = 90
WHERE id = 2;

-- 5. Видалення студента за ID
DELETE FROM students
WHERE id = 4;
