const TASK1_ANSWER = document.getElementById('task1_answer');
const TASK2_ANSWER = document.getElementById('task2_answer');
const TASK2_BUTTON = document.getElementById('task2_button');
const TASK3_ANSWER = document.getElementById('task3_answer');

function calculateSin() {
    // Считываем угол в градусах
    let angle = Number(document.getElementById('user_angle').value);

    // Если ввод пустой
    if (!angle) { alert('Ошибка ввода!'); return; }

    // Перевод в радианы
    let radians = angle * (Math.PI / 180);

    // Вычисляем синус
    let sinValue = parseFloat(Math.sin(radians).toFixed(8));

    // Вывод результата
    TASK1_ANSWER.textContent = `Sin(x) = ${sinValue}`
}

function clickHandler(value) {
    if (value == 'text') {
        // Смена значения value и вывод текста
        TASK2_ANSWER.textContent = "Нажмите кнопку ещё раз!";
        TASK2_BUTTON.setAttribute('onclick', "clickHandler('change')");
    } else {
        // Измение текста и отключение кнопки
        TASK2_ANSWER.textContent = "Текст изменён!";
        TASK2_BUTTON.setAttribute('disabled', false);
    }
}

function createObject() {
    let color = document.getElementById('car_color').value;
    let brand = document.getElementById('car_brand').value;
    let model = document.getElementById('car_model').value;

    // Если ввод пустой
    if (!color.trim() || !brand.trim() || !model.trim()) { alert('Ошибка ввода!'); return; }

    // Создание объекта
    let car = {
        color: color,
        brand: brand,
        model: model
    }

    // Вывод информации
    TASK3_ANSWER.innerHTML = `Цвет:${car.color}<br>Марка:${car.brand}<br>Модель: ${car.model}`;
}

