demo1();
function demo1() {
    console.log("demo1")
}
function demo2() {
    console.log("demo2")
}
function keydown() {
    console.log("1.....")
}
function keyup() {
    var line1 = document.getElementById("txt1");
    var txt1 = document.getElementById("line");
    var l = line1.value;

    txt1.innerText = l;
}
function change() {
    var t = document.getElementById("choice").value;
    console.log(t);
}
var isRunning = false;
var On;
var fan;

function rotate(degreeIncrement) {
    var currentDegree = parseFloat(fan.getAttribute("data-degree")) || 0;
    var newDegree = currentDegree + degreeIncrement;
    fan.style.transform = `rotate(${newDegree}deg)`;
    fan.setAttribute("data-degree", newDegree);
}

function stopFan() {
    clearInterval(On);
    isRunning = false;
    power.innerText = "Start";
}

function startFan(degreeIncrement) {
    fan = document.getElementById("fan");
    On = setInterval(() => rotate(degreeIncrement), 100);
    isRunning = true;
    power.innerText = "Stop";
}

function lvlbooster1() {
    stopFan();
    startFan(20);
}

function lvlbooster2() {
    stopFan();
    startFan(30);
}

function lvlbooster3() {
    stopFan();
    startFan(40);
}

function powerChange() {
    if (!isRunning) {
        startFan(10);
    } else {
        stopFan();
    }
}

document.getElementById("power").addEventListener("click", powerChange);
document.getElementById("lvl1").addEventListener("click", lvlbooster1);
document.getElementById("lvl2").addEventListener("click", lvlbooster2);
document.getElementById("lvl3").addEventListener("click", lvlbooster3);

function writeIn4(e) {
    var v = e.value;
    var k = e.name;
    var hx = document.getElementById(k);
    hx.innerText = v;
}
var results = [];
var count = 0;
var dataCrawl;
var choices = [];
function crawlData() {
    dataCrawl = document.getElementsByClassName("number");
    for (let i = 0; i < dataCrawl.length; i++) {
        if (!choices.includes(parseInt(dataCrawl[i].value))) {
            choices.push(parseInt(dataCrawl[i].value));
        } else {
            alert(`Trùng số ${dataCrawl[i].value}`);
            return;
        }
    }
    do {
        var result = Math.floor((Math.random() * 50) + 1);
        if (!results.includes(result)) {
            results.push(result);
        }

    } while (results.length < 5)
    count = 0; // Reset the count before checking
    for (let i = 0; i < dataCrawl.length; i++) {
        for (let j = 0; j < results.length; j++) {
            if (results[j] === choices[i]) {
                count++;
            }
        }
    }

    if (count === 5) {
        document.getElementById("result1").innerText = "Bingo";
        console.log("1");
    } else {
        document.getElementById("result1").innerText = "Good luck next time";
        console.log("2");

    }

}

function stopScreen(event) {
    event.preventDefault();

}

