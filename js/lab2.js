const TASK2_ANSWER = document.getElementById('task2_answer');
const TASK3_ANSWER = document.getElementById('task3_answer');
const TASK4_ANSWER = document.getElementById('task4_answer');

function welcomeUser() {
    let name = document.getElementById('user_name').value;
    let surname = document.getElementById('user_surname').value;
    let midname = document.getElementById('user_midname').value;
    let age = document.getElementById('user_age').value;

    // Если есть пустое поле
    if (!name.trim() || !surname.trim() || !midname.trim() || !age.trim() || age < 0) { alert('Ошибка ввода'); return; }

    // Выбор приветствия
    if (age < 7) {
        alert(`Привет, ${name}!`);
    } else if (age <= 18) {
        alert(`Здравствуй, ${surname}!`);
    } else {
        alert(`Здравствуйте, ${name} ${midname}!`);
    }
}

function calculateDivision() {
    let firstNum = document.getElementById('first_num').value;
    let secondNum = document.getElementById('second_num').value;

    // Если есть пустое поле
    if (!firstNum.trim() || !secondNum.trim()) { alert('Ошибка ввода'); return; }

    // Вычисление результата
    if (secondNum == 0) {
        TASK2_ANSWER.innerHTML = `Ответ: ДЕЛЕНИЕ НА НОЛЬ!`;
    } else {
        TASK2_ANSWER.innerHTML = `Ответ: ${firstNum / secondNum}`;
    }
}

function printDayOfWeek() {
    let number = document.getElementById('day_of_week').value;

    // Если поле пустое
    if (!number.trim()) { alert('Ошибка ввода!'); return; }

    // Дни недели по номерам
    dayOfWeek = {
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота',
        7: 'Воскресенье'
    }

    if (number >= 1 && number <= 7) {
        TASK3_ANSWER.innerHTML = `Ответ: ${dayOfWeek[number]}`;
    } else {
        TASK3_ANSWER.innerHTML = `Ответ: НЕВЕРНЫЙ ДЕНЬ НЕДЕЛИ!`;
    }
}

function calculateCount() {
    let length = document.getElementById('user_length').value;
    let height = document.getElementById('user_height').value;
    let width = document.getElementById('user_width').value;
    let count = document.getElementById('user_count').value;

    if (length > 0 && width > 0 && height > 0 && count > 0)
        {
            if (searchBestCount(length, width, height)) {
                let answer = Math.ceil(count / searchBestCount(length, width, height));
                TASK4_ANSWER.innerHTML = `Ответ: ${answer}`;
            } else {
                alert("Ошибка ввода!");
            }
        } else {
            alert("Ошибка ввода!");
        }
}

function searchBestCount(length, width, height) {
    var maxCount = 0;
    maxCount = Math.max(findCount(30, 50, 40, length, width, height), findCount(30, 40, 50, length, width, height));
    maxCount = Math.max(findCount(40, 30, 50, length, width, height), maxCount);
    maxCount = Math.max(findCount(40, 50, 30, length, width, height), maxCount);
    maxCount = Math.max(findCount(50, 30, 40, length, width, height), maxCount);
    maxCount = Math.max(findCount(50, 40, 30, length, width, height), maxCount);
    return maxCount;
}

function findCount(l, w, h, length, width, height) {
    let countInLength = findCountHelp(length, l);
    let countInWidth = findCountHelp(width, w);
    let countInHeight = findCountHelp(height, h);

    return countInLength * countInWidth * countInHeight;
}

function findCountHelp(temp, x) {
    let answer = 0;
    for (answer = 0; temp > 0; answer++) {
        if (answer == 0) {
            if (temp >= x) {
                temp -= x;
            } else {
                break;
            }
        } else {
            if (temp >= x + 5) {
                temp -= x + 5;
            } else {
                break;
            }
        }
    }

    return answer;
}