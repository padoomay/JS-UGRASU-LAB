const TASK1_ANSWER = document.getElementById('task1_answer');
const TASK1_BUTTON = document.getElementById('task1_button');
const TASK2_ANSWER = document.getElementById('task2_answer');
const TASK2_BUTTON = document.getElementById('task2_button');
const TASK4_ANSWER = document.getElementById('task4_answer');
const TASK5_ANSWER = document.getElementById('task5_answer');
const TASK6_ANSWER = document.getElementById('task6_answer');

function printTriange(size) {
    for (let i = 0; i < size; i++) {
        let line = "";
        for (let j = 0; j < i + 1; j++) {
            if (j == 0 || j == i || i == size - 1) {
                line += "#"
            } else {
                line += "0";
            }
        }
        TASK1_ANSWER.innerHTML += (line + '<br>');
    }
    TASK1_BUTTON.setAttribute('disabled', false);
}

function printMultiplicationTable(size) {
    TASK2_BUTTON.setAttribute('disabled', false);
    for (let i = 0; i < size; i++) {
        let div = document.createElement('div');
        div.className = 'multiplication-box';
        for (let j = 0; j < size; j++) {
            div.innerHTML += `${i+1} x ${j+1} = ${(i+1)*(j+1)}<br>`;
            if (i + 1 == 5 && j + 1 == 6) { 
                alert("Вывод завершился на 5х6"); 
                TASK2_ANSWER.appendChild(div); 
                return; 
            }
        }
        TASK2_ANSWER.appendChild(div);
    }
}

function checkParity() {
    let userInput = document.getElementById('user_numbers').value.split(' ');

    for (let i = 0; i < userInput.length; i++) {
        if (!parseInt(userInput[i]) && userInput[i] != '0') {
            alert('Ошибка ввода!');
            return;
        } else if (parseInt(userInput[i]) % 2 != 0) {
            alert('Есть нечётные числа');
            return;
        }
    }

    // Если нечетных чисел нет
    alert('Все числа чётные!');
}

function calculateDistance() {
    let count = document.getElementById('count_cars').value;
    let distance = 0;
    let fuel = 100;

    if ((!parseInt(count) && count != '0') || count < 0) { alert('Ошибка ввода!'); return; }

    for (let i = 0; i < count; i++) {
        distance += fuel * (1 / (i+1))
    }

    TASK4_ANSWER.innerHTML = `Растояние: ${parseFloat(distance.toFixed(4))}`;
}

function calculateNumber(value) {
    let user_endnum = document.getElementById('user_endnum').value;
    let count = 0;

    if ((!parseInt(user_endnum) && user_endnum != '0') || user_endnum < 0) { alert('Ошибка ввода!'); return; }

    for (let num = 0; num <= user_endnum; num++) {
        let tempNum = num;
        while (tempNum) {
            if (tempNum % 10 == value) { count++;  }
            tempNum = Math.floor(tempNum / 10); 
        }
    }

    TASK5_ANSWER.innerHTML = `Кол-во двоек: ${count}`;
}

function checkPermutation() {
    let firstLine = Array.from(document.getElementById('user_first_line').value).sort();
    let secondLine = Array.from(document.getElementById('user_second_line').value).sort();

    let check = true;

    if (firstLine.length == 0 || secondLine.length == 0) { alert('Ошибка ввода!'); return; }

    if (firstLine.length == secondLine.length) {
        for (let i = 0; i < firstLine.length; i++) {
            if (firstLine[i] != secondLine[i]) {
                TASK6_ANSWER.innerHTML = `Ответ: Перестановка невозможна!`;
                check = false;
                break;
            }
        }
    } else {
        check = false;
    }

    if (check) {
        TASK6_ANSWER.innerHTML = `Ответ: Перестановка возможна!`;
    } else {
        TASK6_ANSWER.innerHTML = `Ответ: Перестановка невозможна!`;
    }
    
}