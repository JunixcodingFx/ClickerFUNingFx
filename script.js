
let startBtn = document.getElementById('startBtn');
let clickBtn = document.getElementById('clickBtn');
let result = document.getElementById('result');
let toggleMode = document.getElementById('toggleMode');
let body = document.body;

let startTime;

startBtn.onclick = () => {
    result.textContent = "";
    startBtn.style.display = "none";
    setTimeout(() => {
        startTime = new Date().getTime();
        clickBtn.style.display = "inline-block";
    }, Math.random() * 2000 + 1000);
};

clickBtn.onclick = () => {
    let endTime = new Date().getTime();
    let reactionTime = endTime - startTime;
    result.textContent = `Your reaction time: ${reactionTime} ms`;
    clickBtn.style.display = "none";
    startBtn.style.display = "inline-block";
};

toggleMode.onclick = () => {
    body.classList.toggle('dark-mode');
};
