//  VARIABLE DECLARATIONS
let method;
let equation = "";
let first_number = "";
let second_number = "";

//  HERE, WE USE THE querySelector FUNCTION TO GET THE .equal-btn BUTTON
let equals_btn = document.querySelector(".equal-btn");
//  WE USE THE querySelectorAll FUNCTION TO GET ALL THE ELEMENTS WITH THE .number-btn CLASS
let numbers_btns = document.querySelectorAll(".number-btn");
//  WE USE THE querySelectorAll FUNCTION TO GET ALL THE ELEMENTS WITH THE .arithmetic-btn CLASS
let arithmetic_btns = document.querySelectorAll(".arithmetic-btn");

//  HERE, WE LOOP THROUGH THE numbers_btns LIST TO GET ACCESS TO EACH INDIVIDUAL number_btn
numbers_btns.forEach(function(btn) {
    //      
    btn.addEventListener("click", function() {
        number = btn.innerText;

        if(equation == "") {
            first_number = first_number + number;
        } else {
            second_number = second_number + number;
        }
        

        document.querySelector(".screen").value += number;
    })
});

arithmetic_btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if(equation == "") {
            equation = equation + first_number 

        } else {
            second_number = second_number + number;

        }

        method = btn.innerText;
        document.querySelector(".screen").value += method;
    })
})


equals_btn.addEventListener("click", function() {
    let result;
    equation = equation + second_number
    console.log("second_number: " + second_number);
    console.log(equation);

    if(method == "/") {
        result = parseInt(first_number) / parseInt(second_number);
    } else if (method == "*") {
        result = parseInt(first_number) * parseInt(second_number);

    } else if (method == "+") {
        result = parseInt(first_number) + parseInt(second_number);

    } else if (method == "-") {
        result = parseInt(first_number) - parseInt(second_number);
    } else {
        alert("method is incorrect")
    }

    document.querySelector(".screen").value += "="+ result;

    console.log(result);
})





























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
