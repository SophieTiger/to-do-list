//Getters for html elements that sets variables 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const numberTasks = document.getElementById("number-tasks");
const numberComplete = document.getElementById("number-completed");



// Add task to the list 
function addTask() {
    if (inputBox.value === '') {
        alert("You need to write something!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();

}

/**
 * Handles the event when items in the list container are clicked
 * if the task is clicked the function to check it applies
 * if the span with x is clicked the task is removed
 */
listContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        if (event.target.classList.contains("checked")) {
            decrementCompletedToDos();
        } else {
            incrementCompletedToDos();
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

}

/**
 * Decrements the number of to-dos by 1 on the
 * "score board" if the user deletes a task
 * from the list
 */
function decrementToDos() {

}

/**
 * Increments the number of completed to-dos by
 * 1 on the "score board"
 */
function incrementCompletedToDos() {
    let completed = parseInt(numberComplete.innerText);
    completed = completed + 1;
    numberComplete.innerText = completed;
}
/**
 * Decrements the number of completed to-dos by
 * 1 on the "score board"
 */
function decrementCompletedToDos() {
    let completed = parseInt(numberComplete.innerText);
    completed = completed - 1;
    numberComplete.innerText = completed;
}

/**
 * Deletes all tasks from the list
 * when Delete All button is clicked
 */
function deleteAll() {
    listContainer.innerHTML = "";
    saveData();
}

// Local storage of data
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);

}

//Function to display saved data
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();