const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    li.classList.add("fade-in"); // Add animation for smooth entry
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode for ❌ delete icon
    li.appendChild(span);

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        let task = e.target.parentElement;
        task.classList.add("fade-out"); // Add fade-out effect
        setTimeout(() => {
            task.remove();
            saveData();
        }, 300); // Remove task after animation ends
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
