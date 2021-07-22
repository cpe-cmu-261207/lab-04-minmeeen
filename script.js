const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");


inputBox.onkeyup = () => {
    addBtn.classList.add("active");
}
showTasks(); 

addBtn.onclick = () => { 
    let userEnteredValue = inputBox.value; 
    let getLocalStorageData = localStorage.getItem("New Todo"); 
    if (getLocalStorageData == null) { 
        listArray = []; 
    } else {
        listArray = JSON.parse(getLocalStorageData);  
    }

    if (userEnteredValue == "") {
        alert("Task cannot be empty");
    } else {
        listArray.push(userEnteredValue); 
        localStorage.setItem("New Todo", JSON.stringify(listArray)); 
        showTasks(); 

    }

}


function showTasks() {
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
    
    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><button> delete </button></span></li>`;
    });
    todoList.innerHTML = newLiTag; 
    inputBox.value = ""; 
}

//done task function
// function doneTask(index) {

// }
 
// delete task function
function deleteTask(index) {
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); //delete or remove the li
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks(); 
}
