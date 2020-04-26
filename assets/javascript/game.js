$(document).ready(() => {


    // get a random number between 19 and 120 
    // math.floor & math.random

    let randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('#randomNumber').html(randomNumber);


    // get value for each crystal, random number between 1 and 12, 
    // math.floor & math.random

    let red = Math.floor(Math.random() * 12) + 1;
    let blue = Math.floor(Math.random() * 12) + 1;
    let yellow = Math.floor(Math.random() * 12) + 1;
    let green = Math.floor(Math.random() * 12) + 1;

    // player clicks crystal to get value in totalScore

    let wins = 0;
    let losses = 0;

    let totalScore = 0;
    $('#totalScore').text(totalScore);

    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
        resetTwo();
        reset();
    }

    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
        resetTwo();
        reset()
    }

    $('#red').click(() => {
        totalScore = totalScore + red;
        $('#totalScore').text(totalScore);
        if (totalScore === randomNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#blue').click(() => {
        totalScore = totalScore + blue;
        $('#totalScore').text(totalScore);
        if (totalScore === randomNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#yellow').click(() => {
        totalScore = totalScore + yellow;
        $('#totalScore').text(totalScore);
        if (totalScore === randomNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    $('#green').click(() => {
        totalScore = totalScore + green;
        $('#totalScore').text(totalScore);
        if (totalScore === randomNumber) {
            win();
            reset();
            resetTwo();
        } else if (totalScore > randomNumber) {
            lose();
            reset();
            resetTwo();
        }
    });

    // the random value of each jewel gets added together 
    // math.floor & math.random
    // determine if player wins or loses and record wins/losses
    // restart game without reloading page

    function reset() {
        totalScore = 0;
        $('#totalScore').text(totalScore);
    }

    function resetTwo() {
        randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $('#randomNumber').html(randomNumber);
        red = Math.floor(Math.random() * 12) + 1;
        blue = Math.floor(Math.random() * 12) + 1;
        yellow = Math.floor(Math.random() * 12) + 1;
        green = Math.floor(Math.random() * 12) + 1;

    }




});