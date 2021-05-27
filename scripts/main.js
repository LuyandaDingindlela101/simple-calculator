let first_number = "";
let second_number = "";

let numbers_btns = document.querySelectorAll(".number-btn");
let arithmetic_btns = document.querySelectorAll(".arithmetic-btn");

numbers_btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        number = btn.innerText;

        if(second_number == "") {
            first_number = first_number + number;
        } else {
            second_number = second_number + number;
        }
    })
});

arithmetic_btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        method = btn.innerText;

        console.log(method);
        console.log("first_number: " + first_number);
        console.log("second_number: " +  second_number);  
    })
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
