
// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const doneList = document.querySelector(".doneList")

document.addEventListener("DOMContentLoaded", getTodos);
document.addEventListener("DOMContentLoaded", showDone);
inputBox.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addBtn.onclick();
    }
});

addBtn.onclick = () => {
    let userEnteredValue = inputBox.value;
    if (userEnteredValue === "") {
        alert("Task cannot be empty");
    } else {
        showTasks();
        // saveLocalTodos(userEnteredValue);
        // getTodos();
    }

}

todoList.addEventListener("click", deleteCheck);


function showTasks() {
    //event.preventDefault();

    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = inputBox.value;

    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    saveLocalTodos(inputBox.value);


    //check mark btn
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //detele btn
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // todoList.append.Child(todoDiv);

    todoList.insertBefore(todoDiv, todoList.firstChild);
    inputBox.value = "";

}



function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        removeLocalTodos(todo);
        todo.remove();

    }
    //CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        doneLocal(todo);
        todo.classList.toggle("completed");

        removeLocalTodos(todo);
        todo.remove();
        showDone();

    }
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.unshift(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

}


function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {

        //todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //create LI
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        //check mark btn
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //detele btn
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
        // inputBox.value = "";  


        // showDone();
    })

}


function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}


function doneLocal(done) {
    let dones;
    if (localStorage.getItem("dones") === null) {
        dones = [];
    } else {
        dones = JSON.parse(localStorage.getItem("dones"));
    }

    const doneIndex = done.children[0].innerText;
    console.log(doneIndex);
    dones.unshift(doneIndex);
    localStorage.setItem("dones", JSON.stringify(dones));;
}

function showDone() {
    let dones;
    if (localStorage.getItem("dones") === null) {
        dones = [];
    } else {
        dones = JSON.parse(localStorage.getItem("dones"));
    }

    let newLiTag = "";
    dones.forEach((element) => {
        newLiTag += `<li class="line-through">${element}</li>`;
    });
    doneList.innerHTML = newLiTag;

}

