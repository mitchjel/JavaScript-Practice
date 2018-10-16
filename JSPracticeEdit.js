// 1.
function PrintInt(n){
    for (var J=1; J<=n; J++){
                 console.log(J);       
                     } 
     }
      PrintInt(10);
// 2.
function printIntRev(n){
    for(var I=n; I>=1;I--){
        console.log(I);
    }
        }
printIntRev(12)
//3.
function checkInput(x){
    if (typeof x === "number"){
        return "number";
    }
    else if (typeof x === "string"){
        return "string";
    }
    else if (typeof x === "boolean") {
        return "boolean";
}
else {
    return -1;
    }

 }
console.log(checkInput("hello"));
 // 4.
 function SimpleEvenAdding(num){
 var Res=0;
 // loop 1 to num
for ( var I =1; I<=num;I++) {  
 // check whether current number is even
     if ( I % 2 === 0){
          // if it eve number, sum it up
        Res+=I;
       } // end of If
   }
return Res;
 }
console.log(SimpleEvenAdding(6));

// 5.
function letterCapitalize(str) {
    //split the input str based on space
    var splitedArray = str.split(" ");
    var result = "";
    splitedArray.forEach(function(element) {
        result += " " + element[0].toUpperCase() + element.slice(1);
    });
    return result.slice(1);
    }
  // JUst for testing purposes
console.log(letterCapitalize("well, hello there"));
//6. 
function simplereverse(str){
// hello should equal olleh
var splitedArray = str.split("");
var result ="";
   for (J = splitedArray.length-1; J >=0; J--){
            result+= splitedArray[J];
                                            }
            return result;
}
console.log(simplereverse("Hello There!"));
// 7.
function findDiff(arr){
var max = arr[0];
var min = arr[0];
for (var I =0; I < arr.length; I++){
// find max and min
if (max < arr[I]){
    max = arr[I];
}
  if (min > arr[I]){
      min = arr[I];
    }
  }
     return max-min;
}

// 8.
// function timeconvert(num)

function TimeConvert(num){
//61 ===> 1:1
//123 ===> 2:3   
// get hours and minute
// combine them together

var hour = parseInt(num/60);
var min = num % 60;
return hour + ":" + min;

return hour;
}
 // to check it use console.log
console.log(TimeConvert (80));


// 9.


function findString(str, long){
     // make a counter
     var Count = 0;
     // loop through the loop
     for ( var j=0; j <=long.length - str.length; j++ ){
             if ( long.slice (j, j+str.length)=== str) {
                Count ++;
             }     
        }
            return Count;
    }
 // for testing
    console.log (findString("o", "daodo"));
// 10.

function selfDividingNumbers(left, right) {
    // Temporary array to hold result
    var result = [];
    //loop Through given number left to right
    for (var i = left; i <= right; i++) {
        //Check if the number is selfdividing
        if (selfDividing(i)) {
            result.push(i);
        }
    }

    return result;
}
//Check if the number is selfviding
function selfDividing(num) {
    // split num into array of digits
    var myArray = num.toString().split("");
    // use num % digit === 0 to check if the number is selfdivigin
    for (var i = 0; i < myArray.length; i++) {
        if (num % parseInt(myArray[i]) !== 0) {
            return false;
        }
    }
    return true;
}                 

// 11. 
function moveZeros(nums) {
    //Create an array to hold result
    var result = [];
    //Create a counter
    var counter = 0;
    //loop through given number
    for (var i = 0; i < nums.length; i++) {
        //compare nums[i] with 0
        if (nums[i] === 0) {
            counter++;
        } else {
            result.push(nums[i]);
        }
    }

    // Moving zero(s)to the end of array number
    while (counter > 0) {
        result.push(0);
        counter--;
                }
            return result;
            }     
 // 12.    
     function average(arr){
       var Sum = 0;
   for (var i =0; i<arr.length; i++){
       Sum +=arr[i];
   }
      return Sum / arr.length;
     }
