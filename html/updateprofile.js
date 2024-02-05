"use strict";

//just send data to server in background.
//we don't care about the server's reply
fetch("/profile/", {method: "POST", body: "..."} );

//send data to server and wait for server to get it
fetch("/profile/", {method: "POST", body: "..."} ).then( () => {
    console.log("Got it");
});

//send data to server and wait for server to get it
//and print server's response
fetch("/profile/", {method: "POST", body: "..."} ).then( (resp) => {
    resp.text().then( (txt) => {
        console.log("Server said:",txt);
    });
});

function submit(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let dob = document.getElementById("birthdate").value;
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
        //can also use text(), blob(), or arrayBuffer()
        resp.json().then( (J) => {
            console.log("Server said:",J);
        });
    }).catch( (err) => {
        console.log("Uh oh",err);
    })
}