// Word Soup js

let myInput = document.getElementById ('inputBox');
let myOutputBox = document.getElementById('result');

let characterArray = [];

function sortFunction(){
    let inputValue = myInput.value;
    console.log(inputValue);
    characterArray = inputValue.split("");
    console.log(characterArray);
    characterArray.sort();
    console.log(characterArray);
    let theOutput = characterArray.join("");
    console.log(theOutput);
    myOutputBox.innerHTML = (theOutput);
}


// Character Count Js
document.getElementById("count").style.color = "red"

function countChars(obj){
    var maxLength = 20;
    var strLength = obj.value.length;
    
    if(strLength > maxLength){
        document.getElementById("count").innerHTML = '<span>'+strLength+' out of '+maxLength+' characters</span>';
    }else{
        document.getElementById("count").innerHTML = strLength+' out of '+maxLength+' characters';
    }
}