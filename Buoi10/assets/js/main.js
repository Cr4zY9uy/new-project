// var values = [];
// var displayContent = function () {
//     values = document.getElementsByClassName("form-control");

//     let list = document.getElementById("List");
//     for (let i = 0; i < values.length; ++i) {
//         let li = document.createElement('li');
//         li.innerText = values[i].value;
//         list.appendChild(li);
//     }
// }
var isRunning = false;
var countDown;
function down() {

    if (!isRunning) {
        document.getElementById("submit").value = "Stop";
        document.getElementById("submit").innerHTML = "Stop";
        isRunning = true;
        var mins = document.getElementById("mins").innerText;
        var minsDown = parseInt(mins);

        var secs = document.getElementById("secs").innerText;
        var secsDown = parseInt(secs);

        countDown = setInterval(function () {
            if (secsDown == 0) {
                if (minsDown == 0) {
                    clearInterval(countDown);
                } else {
                    minsDown--;
                    secsDown = 59;
                }
            } else {
                secsDown--;
            }

            document.getElementById("mins").innerText = "0" + minsDown;

            if (secsDown < 10) {
                document.getElementById("secs").innerText = "0" + secsDown;
            }
            else {
                document.getElementById("secs").innerText = secsDown;
            }
        }, 10)
    }
    else {
        isRunning = false;
        clearInterval(countDown);
        document.getElementById("submit").value = "Start";
        document.getElementById("submit").innerHTML = "Start";
    }
};
document.getElementById("submit").addEventListener("click", down);
