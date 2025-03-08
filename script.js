// 햄버거 메뉴 토글
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";
}

// 기능 전환
function showSection(section) {
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
    toggleMenu(); // 메뉴를 자동으로 닫음
}

// 숫자 뽑기 기능
function pickNumber() {
    const min = parseInt(document.getElementById("numMin").value);
    const max = parseInt(document.getElementById("numMax").value);
    const pickedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("pickedNumber").innerText = pickedNumber;
}

// 타이머 기능
let timer;
function startTimer() {
    const minutes = parseInt(document.getElementById("timerMinutes").value);
    const seconds = parseInt(document.getElementById("timerSeconds").value);
    let totalSeconds = minutes * 60 + seconds;

    clearInterval(timer);
    timer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            document.getElementById("timerDisplay").innerText = "타임업!";
        } else {
            totalSeconds--;
            document.getElementById("timerDisplay").innerText = `${Math.floor(totalSeconds / 60)}분 ${totalSeconds % 60}초 남았습니다.`;
        }
    }, 1000);
}

// 스톱워치 기능
let stopwatchInterval;
let elapsedTime = 0;

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            elapsedTime++;
            document.getElementById("stopwatchDisplay").textContent = formatTime(elapsedTime);
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    elapsedTime = 0;
    document.getElementById("stopwatchDisplay").textContent = formatTime(elapsedTime);
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// 계산기 기능
function appendCalc(value) {
    document.getElementById("calcDisplay").value += value;
}

function clearCalc() {
    document.getElementById("calcDisplay").value = "";
}

function calculate() {
    try {
        document.getElementById("calcDisplay").value = eval(document.getElementById("calcDisplay").value);
    } catch {
        document.getElementById("calcDisplay").value = "Error";
    }
}
