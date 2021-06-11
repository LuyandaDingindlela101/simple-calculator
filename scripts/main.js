//  VARIABLE DECLARATIONS
let method;
let equation = "";
let first_number = "";
let second_number = "";

//  HERE, WE USE THE querySelector FUNCTION TO GET THE .screen INPUT
let screen_input = document.querySelector(".screen");
//  HERE, WE USE THE querySelector FUNCTION TO GET THE .clear-btn BUTTON
let clear_btn = document.querySelector(".clear-btn");
//  HERE, WE USE THE querySelector FUNCTION TO GET THE .equal-btn BUTTON
let equals_btn = document.querySelector(".equal-btn");
//  WE USE THE querySelectorAll FUNCTION TO GET ALL THE ELEMENTS WITH THE .number-btn CLASS
let numbers_btns = document.querySelectorAll(".number-btn");
//  WE USE THE querySelectorAll FUNCTION TO GET ALL THE ELEMENTS WITH THE .operator-btn CLASS
let operator_btns = document.querySelectorAll(".operator-btn");

//  HERE, WE LOOP THROUGH THE numbers_btns LIST TO GET ACCESS TO EACH INDIVIDUAL number_btn
numbers_btns.forEach(function(btn) {
    //  ADD A CLICK EVENT LISTENER TO EACH INDIVIDUAL btn
    btn.addEventListener("click", function() {
        // WE HAVE TO CHECK IF THE screen_input ISNT EMPTY FIRST
        if(screen_input.textContent != "") { screen_input.value = ""}
                //  GET THE NUMBER TO ADD BY GETTIN THE innerText(TEXT WRITTEN INSIDE) THE btn
                number = btn.innerText;
        
                //  HERE, WE CHECK IF equation IS EMPTY OR NOT
                if(equation == "") {
                    //  IF IT IS, THEN WE KEEP ADDING TO first_number - THIS LETS US STRING NUMBERS TOGETHER eg.12 OR 1234
                    first_number = first_number + number;
                    //  IF equation ISNT EMPTY, THEN WE ADD TO THE second_number
                } else {
                    second_number = second_number + number;
                }
                
                //  UPDATE THE SCREEN FOR THE USER
                screen_input.value += number;
    })
});

//  HERE, WE LOOP THROUGH THE operator_btns LIST TO GET ACCESS TO EACH INDIVIDUAL number_btn
operator_btns.forEach(function(btn) {
    //  ADD A CLICK EVENT LISTENER TO EACH INDIVIDUAL btn
    btn.addEventListener("click", function() {
        //  HERE, WE CHECK IF equation IS EMPTY OR NOT
        if(equation == "") {
            //  IF IT IS, THEN WE KEEP ADD first_number TO THE equation
            equation = equation + first_number 
            //  IF equation ISNT EMPTY, THEN WE ADD TO THE second_number
        } else {
            second_number = second_number + number;
        }

        //  GET THE OPERATOR TO ADD BY GETTIN THE innerText(TEXT WRITTEN INSIDE) THE btn
        operator = btn.innerText;
        //  UPDATE THE SCREEN FOR THE USER
        screen_input.value += operator;
    })
})

//  FUNCTION RUNS WHEN THE equals_btn IS CLICKED
equals_btn.addEventListener("click", function() {
    //  result WILL HOLD THE RESULT OF THE CACULATION
    let result;
    console.log(`first number: ${first_number}, second number: ${second_number}`);
    
    //  NOW WE CHECK WHAT THE operator IS SO WE KNOW WHICJ=H TYPE OF CALCULATION TO DO
    if(operator == "/") {
        console.log(`first number: ${first_number}, second number: ${second_number}`);
        result = parseInt(first_number) / parseInt(second_number);
    } else if (operator == "*") {
        console.log(`first number: ${first_number}, second number: ${second_number}`);
        result = parseInt(first_number) * parseInt(second_number);
        
    } else if (operator == "+") {
        console.log(`first number: ${first_number}, second number: ${second_number}`);
        result = parseInt(first_number) + parseInt(second_number);
        
    } else if (operator == "-") {
        console.log(`first number: ${first_number}, second number: ${second_number}`);
        result = parseInt(first_number) - parseInt(second_number);
    } else {
        alert("operator is incorrect")
    }
    
    // RESET THE first_number AND second_number
    equation = "";
    first_number = "";
    second_number = "";
    //  UPDATE THE SCREEN FOR THE USER
    screen_input.value += "="+ result;
})

//  FUNCTION WILL CLEAR THE SCREEN INPUT AND RESET THE first_number AND second_number
clear_btn.addEventListener("click", function() {
    screen_input.value = "";
    first_number = "";
    second_number = "";
})


//  IT DOESNT REALLY WORK FOR NEGATIVE NUMBERS


























// let people = {
//     person_1: {
//         name: "Ashston",
//         surname: "Martin",
//         age: 18
//     },
//     person_2: {
//         name: "Nathan",
//         surname: "De Jager",
//         age: 21
//     },
//     person_3: {
//         name: "Khanyisa",
//         surname: "Dingindlela",
//         age: 21
//     }
// }


// for (let [key, value] of Object.entries(people)) {
//     console.log(key, value);
// }

// people.person_1.name = "Ghiyaath";

// for (let [key, value] of Object.entries(people)) {
//     console.log(key, value);
// }
