"use strict"




function newTask() {
    let value = document.getElementById("userInput").value;
    var addedTask = document.createElement("div");

    if (value === "") {
        return;
    }

    addedTask.textContent = value;

    let taskList = document.querySelector("ul");
    taskList.appendChild(addedTask);
    addedTask.classList.add("addedTask");



    let textDecoraiton = false;


    addedTask.addEventListener("click", function () {
        addedTask.style.textDecoration = "line-through";

        if (textDecoraiton === true) {
            addedTask.style.textDecoration = "none";
            addedTask.style.color = "white";

        }
        else {

            addedTask.style.textDecoration = "line-through";
            addedTask.style.color = "black";
        }
        textDecoraiton = !textDecoraiton
    }
    );





    // Creating <span> za "X" 
    let exitSpan = document.createElement("span");
    exitSpan.textContent = "\u00D7";
    exitSpan.classList.add("exitSpan");
    addedTask.appendChild(exitSpan);


    // Erase
    exitSpan.addEventListener("click", function () {
        addedTask.style.display = "none";
    });

    document.getElementById("userInput").value = "";

    localStorage.setItem("taskkkkk", value);

    // share();
}


newTask();











const userInput = document.getElementById("userInput");

userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        newTask()
    }



});











function share() {
    const listItem = document.getElementsByClassName("addedTask");
    let object = {
        ime: "nesta"
    };

    for (let i = 0; i < listItem.length; i++) {
        object[`task${i + 1}`] = listItem[i].textContent;
    }

    // console.log(object);

    (async () => {

        const response = await fetch('https://64f847c2824680fd217f5bd2.mockapi.io/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object)
        })

        return console.log(response.json());

    })();
};





//"Clock" in header
window.onload = displayClock();
function displayClock() {
    var display = new Date().toLocaleTimeString();

    document.getElementById("headerSpan").innerText = `Curent time: ${display}`;
    setTimeout(displayClock, 1000);
};






function changeTheme() {
    let frame = document.querySelectorAll(".addedTask");
    //frame.style.backgroundColor = "rgb(197, 219, 238)";

    let frames = document.querySelectorAll(".addedTask");

    frames.forEach(function (frame) {
        frame.style.backgroundColor = "rgb(198, 219, 238)";
        frame.style.backgroundColor === "rgb(197, 219, 238)" ?
            frame.style.color = "red" : console.log("false");
    });






};











