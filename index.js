// //1.Ways to print in JavaScript
// console.log('Hello World '+ parseInt(4+4));
// console.warn('Heyyy');
// console.error('Error');

// //2. JS variables
// var num1 = 34;
// var num2= 65;
// console.log(num1+num2);

// //3. Datatypes - Primitives
// // undefined, null, number, string, boolean, symbol

// //String
// var str1 = 'This is a string';
// var str2= "This is also a string";

// //Numbers
// var num1= 55;
// var num2 = 45;

// //Boolean
// var a= true;
// var b= false;
// console.log(a,b);
// if(a==true){
//     console.log('A is True');
// }

// //undefined
// var c = undefined;
// var d;
// var e = null;
// console.log(c);
// console.log(d);
// console.log(e);


// //4. DataTypes - Reference
// // Arrays, Objects

// // Objects
// var marks = {
//     ravi:80,
//     harry:200
// };
// console.log(num1, str1);
// console.log(num2, str2);
// console.log(marks['ravi']);


// //Arrays
// var ids = [1,2,3,4,'str1',str2]
// console.log(ids);
// console.log(ids[5]);


// //Operators
// console.log('This is the value of num1+num2 ', num1+num2);
// console.log('This is the value of num1-num2 ', num1-num2);
// console.log('This is the value of num1*num2 ', num1*num2);
// console.log('This is the value of num1/num2 ', num1/num2);

// var a1=b
// a1=12
// console.log(b,a1);
// console.log(a1+=2);
// console.log(a1==2);
// console.log(!a);


// //5. Functions - DRY - Do not repeat yourself
// function avg(a,b){
//     return (a+b)/2
// }

// console.log(avg(10,12), avg(10,50));


// // 6. Conditionals in JS 
// var age =108;

// function checkDrinkingAge(age){
//     if(age>18 && age<78){
//         console.log('You can drink!');
//     }
//     else if(age==18){
//         console.log('You can drink but..!');
//     }
//     else if(age>78){
//         console.log('You can not drink but..sometimes!');
//     }
//     else{
//         console.log('You can not drink!');
//     }
// }

// checkDrinkingAge(18);
// checkDrinkingAge(180);
// checkDrinkingAge(48);
// checkDrinkingAge(8);


// // 7. Iteration 
// var arr = [1,2,3,4,5,6,7,8]
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element)
// });

// let j=0;
// const a=1;
// var arr = [1,2,3,4,5,6,7,8];
// while (j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// j=0;
// do{
//     console.log(arr[j]);
//     j++
// }while(j<arr.length)


// var arr = [1,2,3,4,5,6,7,8]
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(arr[i]);
// }


// let myarr= ['Fan','Camera',34,null, true];
// // 8. Array Methods
// console.log(myarr.length);
// myarr.pop()
// console.log(myarr);
// myarr.push('Sur')
// console.log(myarr);
// myarr.shift()
// console.log(myarr);
// myarr.unshift('Fan');
// console.log(myarr.unshift('Fan1'));
// console.log(myarr);
// console.log(myarr.toString());
// myarr.sort()
// console.log(myarr);


// 9. String methods in JS
// let mystr = 'I am a good good person'
// console.log(mystr);
// console.log(mystr.indexOf('good'));
// console.log(mystr.lastIndexOf('good'));

// Slice 
// console.log(mystr.slice(2,14));
// console.log(mystr.replace('good','bad'));

//Date
let date = new Date()
// console.log(date);
// console.log(date.getTime());
// console.log(date.getDay());
// console.log(date.getMinutes());


// // 10. DOM Manipulation
// let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
//console.log(elemClass);
elemClass[0].style.background= 'yellow';
elemClass[1].classList.add('bg-primary');

// tn = document.getElementsByTagName('button');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerHTML= 'This is a new createdElement';
// createdElement2 = document.createElement('p');
// createdElement2.innerHTML= 'This is a new createdElement2';
// tn[0].appendChild(createdElement);
// tn[0].replaceChild(createdElement2,createdElement);
// tn[0].removeChild(createdElement2);


// // Selecting using Query
// sel = document.querySelectorAll('.container')
// console.log(sel);

function clicked(){
    console.log('Button was clicked');
}

// window.onload =function(){
//     console.log('Page loaded');
// }


// // 11. Attach events
// firstContainer.addEventListener('click', function(){
//     console.log('Listener click added');
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log('Mouse Hovered');
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log('Mouse Out');
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML
// let newHTML = '<b>We have been clicked</b>'

// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML= prevHTML;
//     console.log('Mouse Up when clicked on container');
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML= '<b>We have been clicked</b>';
//     console.log('Mouse Down when clicked on container');
// })


//12. Arrow functions
// function sum(a,b){
//     return a+b;
// }

// summ = (a,b)=>{
//     return a+b
// }


// 13. Set timeout and set intervals
// logkaro= ()=>{
//     document.querySelectorAll('.container')[1].innerHTML= '<b>Interval Expired</b>';
//     console.log('Logging after 2 sec');
// }

// setTimeout(logkaro,2000);

// clr = setInterval(logkaro,2000); // repeatedly fire the timeout task
// clearInterval(clr);


// // 14. Local Storage 
// obj = {name:'Surmayi', len:10, o: {a:1,b:2}};
// js = JSON.stringify(obj);
// console.log(obj,js, JSON.parse(js));


// // 15. Backticks
// a=34;
// console.log(`this is ${a}`);


