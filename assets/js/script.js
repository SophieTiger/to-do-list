// Getters for html elements that sets variables  
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const scoreContainer = document.getElementById("score");
const numberTasks = document.getElementById("number-tasks");
const numberComplete = document.getElementById("number-completed");

// Array of messages to display when list item is checked
const messages = [
    "💪 Well Done! 💪",
    "💫 You're a Star! 💫",
    "🤩 Good Job! 🤩",
    "👊 You Rock! 👊"    
];


/**
 * Function to add and remove individual task to the list 
 */
function addTask() {
    if (inputBox.value === '') {
        alert("You need to write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        incrementToDos();
        span.onclick = function () {
            span.parentElement.remove();
            decrementToDos();
        }
    }
    inputBox.value = "";
    saveData();

}
/**
 * Eventlistener for Enter clicks - test
 */
/*
inputBox.addEventListener("keypress", function(e)) {
    if (e.keyCode === 13) {
        if (inputBox.value === '') {
            alert("You need to write something!");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            incrementToDos();
            span.onclick = function () {
                span.parentElement.remove();
                decrementToDos();
            }
        }
        inputBox.value = "";
        saveData();

    }
}
*/

/**
 * Handles the event when items in the list container are clicked
 * The items then become either checked or unchecked
 * The number of completed todos are then incremented or decremented
 */
listContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        if (event.target.classList.contains("checked")) {
            decrementCompletedToDos();
        } else {
            incrementCompletedToDos();
            toastMessage();
        }
        event.target.classList.toggle("checked");
        saveData();
    }
}, false);





/**
 * Increments the number of to-dos by 1 
 * on the "score board"
 */
function incrementToDos() {
    let tasks = parseInt(numberTasks.innerText);
    tasks = tasks + 1;
    numberTasks.innerText = tasks;
    saveData();

}

/**
 * Decrements the number of to-dos by 1 on the
 * "score board" if the user deletes a task
 * from the list
 */
function decrementToDos() {
    let tasks = parseInt(numberTasks.innerText);
    tasks = tasks - 1;
    numberTasks.innerText = tasks;
    saveData();

}

/**
 * Increments the number of completed to-dos by
 * 1 on the "score board"
 */
function incrementCompletedToDos() {
    let completed = parseInt(numberComplete.innerText);
    completed = completed + 1;
    numberComplete.innerText = completed;
    saveData();
}
/**
 * Decrements the number of completed to-dos by
 * 1 on the "score board"
 */
function decrementCompletedToDos() {
    let completed = parseInt(numberComplete.innerText);
    completed = completed - 1;
    numberComplete.innerText = completed;
    saveData();
}

/**
 * Function to display toast message
 */
function toastMessage() {
    let toast = document.getElementById("toast");
    let messageChoice = getRandomNumber();
    message = messages[messageChoice];
    toast.innerHTML = `<h2>${message}</h2>`;
    toast.style.visibility = "visible";
    setTimeout (function () {
        toast.style.visibility = "hidden";
    }, 1500);
}

/**
 * Function to pick a random number and return an integer
 * of 0, 1, 2 or 3 to display that index from the messages array
 */
function getRandomNumber() {
    return Math.floor(Math.random() * 4);
}


/**
 * Deletes all tasks from the list
 * when Delete All button is clicked
 */
function deleteAll() {
    listContainer.innerHTML = "";
    numberTasks.innerText = 0;
    numberComplete.innerText = 0;
    saveData();
}

// Local storage of data
function saveData() {
    localStorage.setItem("listContainer", listContainer.innerHTML);
    localStorage.setItem("numberTasks", numberTasks.innerHTML);
    localStorage.setItem("numberComplete", numberComplete.innerHTML);

}

//Function to display saved data
function showTask() {
    listContainer.innerHTML = localStorage.getItem("listContainer");
    numberTasks.innerHTML = localStorage.getItem("numberTasks");
    numberComplete.innerHTML = localStorage.getItem("numberComplete");
}
showTask();
