// let a = [2, 3, 1, 5, 7, 21, 66, 311, 42];
// let max_Array = a[0];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] > max_Array) {
//         max_Array = a[i];
//     }
// }
// console.log(Math.max(...a));

// var a = [];
// for (let i = 0; i < 10; i++) {
//     var x = prompt(`Nhap gia tri a[${i}]: `);
//     a.push(x);
// }
// var max_Array = a[0];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] > max_Array) {
//         max_Array = a[i];
//     }
// }
// alert(max_Array);
// var a = [];
// for (let i = 0; i < 10; i++) {
//     var x = prompt();
//     a.push(x);
// }
// var min_Array = a[0];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] < min_Array) {
//         min_Array = a[i];
//     }
// }
// alert(min_Array);

// var msg = false;
// var a=[];
//     do {
//         var input = parseInt(prompt("Nhap 1 so ngau nhien"));


//             if(!a.includes(input)&& input<=100 && input>=0){
//                 a.push(input);
//             }


//         }
//     while (a.length<5);
//     var output = parseInt(Math.random() * 100);
//     for(var item of a){
//     if (input == output) {
//         alert("Trung");
//         msg = true;
//         break;
//     }
//     else {
//         alert("Tach");
//         msg = false;
//     }
//     }


var a = [];
var b = [];
var count = 0;
do {
    var input = parseInt(prompt("Nhap 1 so ngau nhien"));


    if (!a.includes(input) && input <= 45 && input >= 0) {
        a.push(input);
    }


}
while (a.length < 5);
for (let i = 0; i < 5; i++) {
    var output = parseInt(Math.random() * 45);
    if (!b.includes(output)) {
        b.push(output)
    }
}
for (let i = 0; i < a.length; i++) {

    if (b.includes(a[i])) {
        count++;
    }

}
switch (count) {
    case 3:
        alert("+ 10M");
        break;
    case 4:
        alert("+ 100M");
        break;
    case 5:
        alert("JackPot");
        break;
    default:
        alert("Nope");
        break;
}