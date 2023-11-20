"use strict"


/*function newTask() {
    let value = document.getElementById("userInput").value;//vrijednost koju je korisnik unjeo

    var addedTask = document.createElement("div");//kreiramo novi div

    if (value === "") {
        return;
    };

    addedTask.textContent = value;//novokreiranom divu prosljeđujemo vrijednost koju je korisnik unjeo


    let taskList = document.querySelector("ul");//selektiramo ul 
    taskList.appendChild(addedTask);// unutar ul smo ubacili novokreirani div sa vrijednosti
    addedTask.classList.add("addedTask")

    //kad kliknemo na div, prekrizi zadatak
    addedTask.addEventListener("click", function () {
        addedTask.style.textDecoration = "line-through";
    });

    //creating a span and adding it to created div
    let exitSpan = document.createElement("Span")
    exitSpan.textContent = "\u00D7"
    addedTask.appendChild(exitSpan);
    exitSpan.classList.add("exitSpan")

    //funkcionalnost spanu
    exitSpan.addEventListener("click", function () {
        addedTask.style.display = "none";
    });


    document.getElementById("userInput").value = "";



    localStorage.setItem('taskkkkk', value);




    share()
};*/












function newTask() {
    let value = document.getElementById("userInput").value; // Vrijednost koju je korisnik unio

    var addedTask = document.createElement("div"); // Kreiramo novi div

    if (value === "") {
        return;
    }

    addedTask.textContent = value; // Novokreiranom divu prosljeđujemo vrijednost koju je korisnik unio

    let taskList = document.querySelector("ul"); // Selektiramo ul
    taskList.appendChild(addedTask); // Unutar ul smo ubacili novokreirani div sa vrijednosti
    addedTask.classList.add("addedTask");

    // Kad kliknemo na div, prekriži zadatak

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





    // Stvaranje <span> za "X" i dodavanje  u div
    let exitSpan = document.createElement("span");
    exitSpan.textContent = "\u00D7";
    exitSpan.classList.add("exitSpan");
    addedTask.appendChild(exitSpan);


    // Funkcionalnost za brisanje zadatka
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




//slanje podataka na server


/*function share() {
    const ul = document.getElementsByClassName("list");
    const listItem = document.getElementsByClassName("addedTask");//svaki task je novi div..pocetno je prazno
    let object = {};

    for (let i = 0; i < listItem.length; i++) {
        object[`tasknr ${i + 1}`] = listItem[i].textContent
        /* {
             task: listItem[i].textContent//za svaki novi task stvoriti ce novi objekt u kojem ce key biti "task:" a value ce biti listItem[i]
 
 
         };
    }

    console.log(object);





};*/
function share() {
    const listItem = document.getElementsByClassName("addedTask"); // Svaki task je novi div..pocetno je prazno
    let object = {
        ime: "nesta"
    };

    for (let i = 0; i < listItem.length; i++) {
        object[`task${i + 1}`] = listItem[i].textContent;
    }

    // console.log(object);

    (async () => {

        const response = await fetch('https://64f847c2824680fd217f5bd2.mockapi.io/task', {
            method: 'POST',//metoda kojom postamo na gore navedeni link 
            headers: {
                'Content-Type': 'application/json',//govorimo kakav je oblik podataka
            },
            body: JSON.stringify(object)// object konvertiramo u json 
        })

        return console.log(response.json());

    })();
};





//"Sat" u headeru
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



    /*

    frame.style.backgroundColor = "rgb(198, 219, 238)";
    frame.style.backgroundColor === "rgb(197, 219, 238)" ?
        frame.style.color = "red" : console.log("false");




    /*const userInput = document.getElementById("userInput");
    userInput.style.backgroundColor = userInput.style.backgroundColor === "white" ? "blue" : "white*/

};











