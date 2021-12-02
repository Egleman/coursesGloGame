let number;
let attempts;
let deattempts;



const isNumber = (x) => {
    return !isNaN(parseFloat(x)) && isFinite(x);
};

function resetGame() {
    attempts = 0;
    deattempts = 10;
    number = Math.floor(Math.random() * 100);
}

function tryGuessNumber() {
    const userAnswer = prompt(`Введите число от 0 до 100, для выхода напишите -1. Количество попыток: ${deattempts}`);

    if (userAnswer === null) {
        alert('До свидания!');
        return;
    }
    
    if (Number.isNaN(userAnswer)) {
        alert('Необходимо ввести целое число от 0 до 100');
        tryGuessNumber();
        return;
    }


    attempts++;
    deattempts--;

    if (attempts >= 10) {
        if(confirm('Попытки закончились, хотите сыграть еще?')) {
            alert('До свидания!');
            return;
        }
        resetGame();
        tryGuessNumber();
    }

    if (userAnswer > number) {
        alert("Попробуйте число поменьше");
    } else if (userAnswer < number) {
        alert('Попробуйте число побольше');
    } else {
        alert(`Поздравляю, вы отгодали число с ${attempts} попытки`);
        if(!confirm('Хоnите сыграть ещё раз?')) {
            alert('До свидания!');
            return;
        }
        resetGame();
    }

    tryGuessNumber();
}

resetGame();
tryGuessNumber();