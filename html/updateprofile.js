"use strict";

function submit() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let dob = document.getElementById("birthdate").value;
    let profilePicInput = document.getElementById("picture");

    let formData = new FormData();
    formData.append("firstName", fname);
    formData.append("lastName", lname);
    formData.append("birthDate", dob);
    formData.append("picture", profilePicInput.files[0]); // Assuming only one file is selected

    fetch("/updateprofile", {
        method: "POST",
        body: formData,
    })
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        console.log("Server said:", data);
    })
    .catch((err) => {
        console.log("Uh oh", err);
    });
}
