

function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //possible password values
    let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+<>?";

    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
        console.log(password);
    }

    //add password to text display
    document.getElementById("display").value = password;

    //add password to generated password list
    document.getElementById("lastPassword").innerHTML += password + "<br />";

    }

    //default length to 25
    document.getElementById("length").innerHTML = "length: 25";

    //display length based on slider position
    document.getElementById("slider").oninput = function(){
        if(document.getElementById("slider").value > 0){
            document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
        }
        else{
            document.getElementById("length").innerHTML = "length: 1";
        }
    }
    


    function copy() {
        var copyText = document.querySelector("#display");
        copyText.select();
        document.execCommand("copy");
      }
      
     // document.querySelector("#copy").addEventListener("click", copy);


//console.log(generate());








// //set the variable
// var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()<>?';

// //make the function number = number of characters (77)
// function randomCharacterGen(numberOfLetters) {

//   //result is blank
//   var result = "";
//   for( var i = 0; i < numberOfLetters; i++ ) {

//     //result = result + new stuff
//     result += characters[

//       //randomly generate a character from the array --- use [][][][][][] for array!!!!
//       //first floor the number(Result) of the following function (which is the random numbergenerator x length of array)
//       Math.floor

//       //multiply length of array (77) by a random decimal (number under 1)
//       (Math.random() * characters.length)];

//     //prints result everytime it loops
//     //console.log(result);
//   }

//   //return the result
//   return result;

// }

// generate.onclick = randomCharacterGen;

// //print the result - number of characters are generated randomly
// console.log(randomCharacterGen(8));

// // var el = document.getElementById("generate");
// // if (el.addEventListener)
// //     el.addEventListener("click", button id="generate");

    

// //     function generatePassword() {
// //     var length = 8,
// //         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+<>?",
// //         retVal = "";
// //     for (var i = 0, n = charset.length; i < length; ++i) {
// //         password += charset.charAt(Math.floor(Math.random() * n));
// //     }
// //     return retVal;
// // }

// // console.log(generatePassword(retVal));
    