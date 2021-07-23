const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");




showTasks();
// showDone();

inputBox.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addBtn.onclick();
    }
});

addBtn.onclick = () => {
    let userEnteredValue = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }

    if (userEnteredValue === "") {
        alert("Task cannot be empty");
    } else {
        listArray.unshift(userEnteredValue);
        localStorage.setItem("New Todo", JSON.stringify(listArray));
        showTasks();
        // showDone();
        
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
        newLiTag += `<li>${element}<span class="icon" onclick="doneTask(${index})"><i class="fas fa-check"></i><span><span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });

    todoList.innerHTML = newLiTag;
    inputBox.value = "";

    //showDone();
}

// function doneTask(index) {
//     let getLocalStorageData = localStorage.getItem("New Todo");
//     listArray = JSON.parse(getLocalStorageData);

//     let done = listArray;
//     document.getElementsByName(done).innerHTML = '<del> index </del>'
//     let doneLocalStorageData = localStorage.getItem("doneTask");
//     if (doneLocalStorageData == null) {
//         doneArray = [];
//     } else {
//         doneArray = JSON.parse(doneLocalStorageData);
//     }
//     doneArray.unshift(done);
//     localStorage.setItem("doneTask, JSON.stringify(doneArray))
       
//     listArray.splice(index, 1); //delete or remove the li
//     localStorage.setItem("New Todo", JSON.stringify(listArray));
//     showTasks(); 
//     showDone();
// }

function showDone() {
    let doneLocalStorageData = localStorage.getItem("doneTask");
    if (doneLocalStorageData == null) {
        doneArray = [];
    } else {
        doneArray = JSON.parse(doneLocalStorageData);
    }


    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li>${element}</li>`;
    });

    todoList.innerHTML = newLiTag;
    // inputBox.value = "";
}


// delete task function
function deleteTask(index) {
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); 
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks(); 
}

