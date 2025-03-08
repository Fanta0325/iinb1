document.getElementById('menuToggle').onclick = function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
};

function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function pickNumber() {
    var min = parseInt(document.getElementById('numMin').value);
    var max = parseInt(document.getElementById('numMax').value);
    if (!isNaN(min) && !isNaN(max) && min < max) {
        var picked = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById('pickedNumber').innerText = '뽑은 숫자: ' + picked;
    } else {
        document.getElementById('pickedNumber').innerText = '유효한 범위를 입력해주세요.';
    }
}

// 타이머 기능 구현
var timerInterval;
function startTimer() {
    var minutes = parseInt(document.getElementById('timerMinutes').value);
    var seconds = parseInt(document.getElementById('timerSeconds').value);
    var totalSeconds = (isNaN(minutes) ? 0 : minutes * 60) + (isNaN(seconds) ? 0 : seconds);

    clearInterval(timerInterval);
    timerInterval = setInterval(function() {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timerDisplay').innerText = '타이머 완료!';
        } else {
            totalSeconds--;
            var displayMinutes = Math.floor(totalSeconds / 60);
            var displaySeconds = totalSeconds % 60;
            document.getElementById('timerDisplay').innerText = displayMinutes + '분 ' + displaySeconds + '초';
        }
    }, 1000);
}

// 스톱워치 기능 구현
var stopwatchInterval;
var stopwatchSeconds = 0;
function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(function() {
        stopwatchSeconds++;
        var displayMinutes = Math.floor(stopwatchSeconds / 60);
        var displaySeconds = stopwatchSeconds % 60;
        document.getElementById('stopwatchDisplay').innerText = displayMinutes + '분 ' + displaySeconds + '초';
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    document.getElementById('stopwatchDisplay').innerText = '';
}

// 계산기 기능 구현
function appendCalc(value) {
    document.getElementById('calcDisplay').value += value;
}

function clearCalc() {
    document.getElementById('calcDisplay').value = '';
}

function calculate() {
    try {
        document.getElementById('calcDisplay').value = eval(document.getElementById('calcDisplay').value);
    } catch {
        document.getElementById('calcDisplay').value = 'Error';
    }
}
