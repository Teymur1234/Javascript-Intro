// 1ci sual

// var eded=3333
// var eded2="7"
// // var eded2=7
// // eded2=(7*10000+eded)*10+8
// // console.log(eded2);
// var terseded=0
// while (eded>=1) {
//     var a =eded%10
//     terseded=terseded*10+a
//     eded=(eded-a)/10
// }
// while(terseded>=1) {
//     var b =terseded%10
//     eded2+=b
//     terseded=(terseded-b)/10
// }
// eded2+=8
// console.log(eded2);

//2ci sual
//     var sum=0
// for (let i = 1; i <= 1000; i++) {
//     var eded
//     eded=i
//     while (i>=1) {
//         var b
//         b=i%10
//         sum+=b
//         i=(i-b)/10
//     }
//     if (sum%3==0) {
//         console.log(eded);
//     }
// }

//3cu sual
// var num1=2345
// var num2=2345678
// console.log((num1*0.04+num2*0.09)*0.1);

//4cu sual
// var enqapi=3;
// var hundurqapi=3;
// var skafhund=15;
// var skafen=3;
// var skafuzun=3;
// if(hundurqapi<skafhund || hundurqapi<skafen||hundurqapi<skafuzun){
//     console.log("kecmez");
// }
// else if(enqapi<skafhund || enqapi<skafen || enqapi<skafuzun){
//     console.log("kecmez");
// }
// else{
//     console.log("kecer");
// }

//5ci sual
// var num=3453;
// var a=num%10;
//  switch (a) {
//     case 1:
//         console.log("1 ci gun")
//         break;
//         case 2:
//             console.log("2 ci gun")
//             break;
//             case 3:
//             console.log("3 cu gun")
//             break;
//             case 4:
//             console.log("4 cu gun")
//             break;
//             case 5:
//             console.log("5 ci gun")
//             break;
//             case 6:
//             console.log(" 6 ci gun")
//             break;
//             case 7:
//             console.log("7 ci gun")
//             break;
//     default:
//         console.log("diger ededdir");
//         break;
//  }

//6ci sual
// var arr=[]
// var eded1=1
// var eded2=2
// var eded3=3
// var eded4=4
// var eded5=5
// var eded6=6
// arr.push(eded1,eded2,eded3,eded4,eded5,eded6);
// for (var i = 0; i < arr.length; i++) {
//      for (var j = 0; j < (arr.length - i - 1); j++) {
//         if (arr[j] > arr[j + 1]) {
//             var temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }
// console.log(arr[6]);