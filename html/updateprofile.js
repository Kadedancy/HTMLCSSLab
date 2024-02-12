"use strict";
console.log("Script loaded");

function submit() {
    console.log("Submit called");
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let dob = document.getElementById("birthdate").value;
    let profilePicInput = document.getElementById("picture");
    let J = {
        firstName: fname,
        lastName: lname,
        birthDate: dob
    };

    fetch( "/updateprofile",
        {   method: "POST",
            body: JSON.stringify(J)
        }
    ).then( (resp) => {
        resp.json().then( (J) => {
            console.log("Server said:",J);
        });
    }).catch( (err) => {
        console.log("Uh oh",err);
    })
}

