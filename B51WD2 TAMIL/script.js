//Basic of Language

console.log("hello world");
console.log("working good");

// comment out lines

console.log("first line of code");

/*console.log("second linr of code");

console.log("thirt line of code");*/
console.log(15);

//// creation of variable 
//syntax-> variablekeyword, variable name = vale
// its not a formula its method of declare the value

var a = 20
console.log(window.a);
// sample checking 
var studName = "esakki";
console.log(window.studName);
console.log(a);

//declaring a variable
var b;
b = 30;
console.log(b);

// different types of variable declaration
// var,let,const

// var
var xyz=35;                        //35
xyz=45 // we can reassign a value  //45
xyz=50 // we can redeclared the same vale  //50
console.log(xyz);

//let
let abc = 60;
abc = 65 // we can reassing a value
//let abc = 70 // we cannot redeclaration
console.log(abc);

// const
// camleCasing (writing format ex; studentName)  ( this is kind of norm on variable declaration)
// elephant casing( all caps ex; STUDENT_NAME)
const studentName= "Esakki"; 
// studentName = Sundar // we cannot reassing
// const studentName = Madhu // we cannot redeclared
console.log(studentName); 

// // data types
// // primitive 
// String   ->"" or ''
// Boolean  ->true or false
// Number   ->01234
// null     ->nothing
// undefined
//flot -> 565.5666

// // non primitive 
// Array
// Object

const name = "esakki";
const name2 = 'sundar';
console.log(name, name2);
 
const value = null
console.log(value);

//undefined
let value2;
console.log(value2);

// let smapleValue = null
// console.log(smapleValue);
// smapleValue = 75;
// console.log(smapleValue);

//array -> continues allocations of memory
const arr = [0, "esakki", true, null, 79.85];
console.log(arr);
//accesing array
console.log(arr[3]);  

// objects 
// key ; values
const sampleObj = {
    name : "esakki",
    subject : "full stack developement",
    age : 27
}
console.log(sampleObj);
console.log("window function---------", window.age);
// run panni paatha undefined varum, yenna window apdingurathu oru object----dirctah window ah call pannalam, ex; mul(num1)apdinna console.log(window.mul) ippdi call pannalam, var-kku varum let-kku varaathu  
// accesing object
console.log(sampleObj.subject);

console.log("---------------------------------");

// operators
console.log("arthimetic operators-------------");
// two different values compared and give a result
//arthimetic operators
// + - * / % ++ -- 
let val1 = 90;
let val2 = 99;
console.log('add', val1 + val2);
console.log("sub" , val1 - val2);
console.log("div", val1 * val2);
console.log("mul", val1 / val2);
// modules called reminder
console.log("reminter", val1 % val2);
console.log("Before inc val1", val1);
val1++;
console.log("after inc;" , val1)
console.log("Before dec val1", val1);
val1--;
console.log("after dec;" , val1)
console.log("assignment operators");
console.log(val1);
val1 += 50; //val1 = val1 + 50 // -=, *=, /=, %=
console.log("add", (val1 += val2));
console.log('---------------------------------------')

console.log("comparision operators");
const comVal1 = 10;
const comVal2 = '10';
console.log("Non strict comparision" , comVal1 == comVal2);
console.log("strict comparision" , comVal1 === comVal2);
console.log("not equal" , comVal1 != comVal2);
console.log("nor equal comparision" , comVal1 !== comVal2);
console.log("greater than" , val1 > val2);
console.log("less than" , val1 < val2);
const eqlVal1 = 50;
const eqlVal2= 50
console.log("greater than equal" , eqlVal1 >= eqlVal2);
console.log("less than equal" , eqlVal1 <= eqlVal2);

// logical operators 
console.log("--------------------------------------");
console.log("logical operators");
// && || !
const task = 80;
const attendance = 75;
const score = 77
console.log(score )
console.log(score > task && score > attendance);
console.log(score > task || score > attendance);
console.log(!(score > task && score > attendance));
console.log(!(score > task || score > attendance));

// loops
console.log("---------------------------------------");
console.log('----------- forloop ------------------');
// let day (variable) = 0, (value) 0 1 2 3 4 5
//cindition day< = 5
//defining skip values
//value update aagum
// day = 1 -> day <=5 (true), day++ = 2
//day = 2 -> day <= 5 (true), day++ = 3
//day = 3 -> day <= 5 (true), day++ = 4
//day = 4 -> day <= 5 (true), day++ = 5
//day = 5 -> day <= 5 (true), day++ = 6
//day =6 -> day <= 6 (false)

for(let day =1; day<=5; day++){
    console.log("buyed milk for day", day);
}

for(let day =5; day>=1; day--){
    console.log("buyed milk for day", day);
}

//conditions
console.log("----------------------------------------")
console.log("condition------------------------------")

let avarege = 35;
let good = 70;
let excellence = 90;

let yourMark = 70;

if(yourMark >= excellence){
    console.log("you are excellence");
} else if(yourMark>=good) {
    console.log("you have a good mark");
} else if(yourMark >= avarege){
    console.log("you have a just passed");
} else {
    console.log("you are fail");
}

//switch case(the way of find the results)

const day = 5
switch (day){
    case 0:
        console.log("sunday");
        break;
    case 1:
            console.log("monday");
        break
    case 2:
        console.log("tuesday");
        break   
    case 3:
        console.log("wednestday");
        break
    case 4:
        console.log("thursday");
        break    
    case 5:
        console.log("friday");
        break
    case 6:
        console.log("saturday");
        break    
    default:
        console.log('you have not enterd a date');    
}

// function with return keywords
// function functionName (){
   // logic of function
//}
// example: funtion pedal(functionNmae)()

function pedal(){
    console.log("move the cycle forward");
}

function handleBar(){
    console.log("move the cycle to the direction");
}
// call a function
pedal();
handleBar();

function add(){
    console.log(2+3)
}
add();

function add(num1 , num2){
    console.log(num1 + num2);
}
add(5, 8);

function sub(num1 , num2){
    console.log(num1 - num2);
}
sub(18, 8);
// its method suitable to all function like + _ * % /
// return function
function calculator(type, num1, num2){
    switch(type) {
        case "add":
        return num1 + num2;
        case "sub":
            return num1 - num2;
        case "mul":
            return num1 * num2;
        default:
            return "please check your inputs"        
    }
}
const results = calculator("mul" , 40, 5);
console.log(results);

const globalObject = {
    nestedObject : {
        data : "vijay"
    },
    arr : [2, 3, 5, 6, 8]
};
// nestedObject apdingurathu oru peru, athoda value innoru object, athu oru objctah irukkalam , array-va irukalam enna data typeah venumnalum irukkalam 
console.log(globalObject.nestedObject.data);
// 14 code ref
var aaa = { name: 'sanjay'};
console.log(window);
console.log(window.aaa.name);
console.log(aaa.name);
//ellame window-kulla than irukkum
// ref

// data types
//JavaScript has 8 Datatypes
//String.
//Number.
//Bigint.
//Boolean.
//Undefined.
//Null.
//Symbol.
//Object.(array object, data object)





var className1 = "b51wd2Tamil";
var className2 = className1;
className2 = "B52WD2";
console.log("class", className1);
console.log("class2", className2);
// ithukku peru copy by valuenu solluvanga 
// rendukkum thani thani address so change aagum
// string,number,boolean,primitive(common) datatypes-kku ellam intha method than us aagum

let obj1 = {
    name: "object1",
}
let obj2 = obj1;
obj2.name = "object2";
console.log("obj1", obj1);
console.log("obj2", obj2);
// this is called copy by reference 
// copy by refernce addressah copy pannum valueah copy pannathu
// ithu rendukkum ore adress so chnage aagathu
// object, array ithukkellam copy by ref than work aagum