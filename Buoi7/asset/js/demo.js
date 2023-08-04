
// var msg = false;
// do {
//     do {
//         var input = prompt("Nhap 1 so ngau nhien");
//     }
//     while (input > 100 || input < 0);
//     var output = parseInt(Math.random() * 100);
//     if (input == output) {
//         alert("Trung");
//         msg = true;
//         break;
//     }
//     else {
//         alert("Tach");
//         msg = false;
//     }

// } while (!msg);

var t = prompt("Nhap so tien muon gui");
var r = 0.03;
var n = prompt("Nhap so nam muon gui");
var r_n = 1;
for (var i = 1; i <= n; i++) {
    r_n = r_n * (1 + r);
}
alert(t * r_n); 