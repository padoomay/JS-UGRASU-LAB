const TASK1_ANSWER = document.getElementById('task1_answer');
const TASK1_BUTTON = document.getElementById('task1_button');
const TASK2_ANSWER = document.getElementById('task2_answer');
const TASK2_BUTTON = document.getElementById('task2_button');

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