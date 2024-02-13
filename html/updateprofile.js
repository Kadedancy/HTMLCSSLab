"use strict";
console.log("Script loaded");

let profilePicInput = document.getElementById("picture");
let profilepicture = document.getElementById("proPicture")
profilePicInput.onchange = function(){
    profilepicture.src = URL.createObjectURL(profilePicInput.files[0]);
}

function update() {
    console.log("Submit called");
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let dob = document.getElementById("dob").value;

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
            if (J.ok) 
            {
                document.getElementById("realname").innerText = "Full Name:" + fname + " " + lname;
                document.getElementById("birthDate").innerText = "Date of Birth:" + dob;

                console.log("Profile updated successfully!", fname, lname, dob);
            } 
            else 
            {
                console.log("Profile update failed.");
            }
        });
    }).catch( (err) => {
        console.log("Uh oh",err);
    })
}

