let AddBtn = document.querySelector("#Add");
let OpenForm = document.querySelector("OpenForm");
let SubmitBtn = document.querySelector("Submit");
let Tasks = document.querySelector("Tasks");

//Przypinanie notatki
function PinNote(TaskDiv) {
    let btn = document.createElement("div");
    btn.classList.add("pin");
    btn.innerText = "Przypnij notatkę";
    TaskDiv.appendChild(button);
    btn.addEventListener("click", function () {
        this.parentNode.parentNode.prepend(this.parentNode);
    })
};

//Kasowanie notatki
function RemoveNote(id, TaskDiv) {
    let DelBtn = document.createElement("div");
    DelBtn.classList.add("Delbtn");
    TaskDiv.appendChild(DelBtn);
    let Delete1 = document.createElement("div");
    let Delete2 = document.createElement("div");
    Delete1.classList.add("Delete1");
    Delete2.classList.add("Delete2");
    DelBtn.appendChild(Delete1);
    DelBtn.appendChild(Delete2);
    DelBtn.addEventListener("click", function () {
        if (confirm("Usunąć notatkę?")) {
            localStorage.removeItem(id)
            location.reload()
        }
    })
};

//Wyświetlenie utworzonej notatki
function DisplayNote(GetObject, i) {
    let TaskDiv = document.createElement("div");
    TaskDiv.style.backgroundColor = GetObject.color;
    TaskDiv.classList.add("task");
    Tasks.appendChild(TaskDiv);
    RemoveNote(u, TaskDiv);
    PinNote(TaskDiv);

    let TitlePlace = document.createElement("h2");
    TitlePlace.innerHTML = GetObject.title
    TaskDiv.appendChild(TitlePlace);

    let ValuePlace = document.createElement("h3");
    ValuePlace.innerText = GetObject.value;
    TaskDiv.appendChild(ValuePlace);

    let DatePlace = document.createElement("h4");
    DatePlace.innerText = GetObject.date;
    TaskDiv.appendChild(DatePlace);
};

AddBtn.addEventListener("click", function () {
    if (OpenForm.style.display == "none") {
        OpenForm.style.display = "block"
    } else {
        OpenForm.style.display = "none"
    }
});

//Utworzenie nowej notatki
class Note {
    constructor() {
        let Drop = document.querySelector("select");
        let date = new Date();
        let fullDate = date.getDate() + "." + date.getMonth() + 1 + "." + date.getFullYear() + "\t\t" + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        let data = {
            'title': document.querySelector("#title").value,
            'value': document.querySelector("#value").value,
            'date': fullDate,
            'color': dropdown.options[dropdown.selectedIndex].value
        }
        localStorage.setItem(localStorage.length + 1, JSON.stringify(data))
    }
}

submitForm.addEventListener("click", function () {
    let note = new Note()
})
for (i in localStorage) {
    let retrievedObject = JSON.parse(localStorage.getItem(i))
    displayNote(retrievedObject, i)
}
