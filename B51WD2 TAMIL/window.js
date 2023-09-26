//object will be of 
//key and value
//key -> var name
//value -> any data type
var testWindow = {
        a: 15,
        sampleObj: {
            key: "value",
        },
    }; 
//console.log(tetWindow);
var a = 15;
var sampleObj = {
    key1: "value1",
};
function add() {
    console.log("added");
}
//function-um,kay valuename-um object-la than store aagum
console.log(a);
console.log(window.testWindow.sampleObj);
console.log(testWindow);

// content of js day 3

// Introduction to Array
// Array and JSON iteration
// XMLHttpRequest
// Hoisting & scope

const arr = [4, "sring", true, [0, 1, "s"], { a: "aaa"}];

console.log(arr);
//lookup
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[3][2]);
console.log(arr[4].a);

//JSON iteration
//JSON is nothing but its a object of information
//JSon is nothing but on object athula oru key value irukkum
//key : value
// json-la key eppaume stringah irukkanum,value can be anything
// Javascript object notation(full form)

//example : Object of information ********
const Data = {
    string: "sanjay",
    number: 7,
    array: ["sanjay", 7, { nestedObj:"nestedValue"}],
    obj: {
        batch: "B51WD2",
        mentor: "esakki",
        stack: ["javascript", "html", "css"],
    },
    isStudent: true,
};
//array means [index], object - dot operator
console.log(Data);
console.log(Data);
console.log(Data.array);
console.log(Data.array[2]);
console.log(Data.array[2].nestedObj);
console.log(Data.obj.stack[1]);
console.log(Data.isStudent);

const samArr = [1, 2, 3, 4];

console.log("before", samArr);
//push method
samArr.push(5);
console.log("after", samArr);
//pinnadi oru value add aagum

//pop method
console.log("before", samArr);
samArr.pop();
console.log("after",samArr);
//pinnadi oru value decrease aagum

//unshift method
samArr.unshift(0);
console.log("after", samArr);
//munnadi oru value add aaggum

//shift method
samArr.shift()
console.log("after", samArr);
//munnadi oru elementah remove pannirum

//hoising