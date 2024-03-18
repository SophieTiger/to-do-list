const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// Add task to the list 
function addTask () {
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

// Remove to-dos from the list 
listContainer.addEventListener("click", function(event) {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
}, false);

// Handles the checked to-dos on the list
function checkedToDo () {

}

/**
 * Increments the number of to-dos by 1 
 * on the "score board"
 */
function incrementToDos () {

}

/**
 * Decrements the number of to-dos by 1 on the
 * "score board" if the user deletes a task
 * from the list
 */
function decrementToDos () {

}

/**
 * Increments the number of completed to-dos by
 * 1 on the "score board"
 */
function incrementCompletedToDos () {

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