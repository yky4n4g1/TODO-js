const todoForm = document.getElementById("new-todo");
const todoList = document.getElementsByClassName("todo-list")[0];
const btnDeleteAll = document.getElementById("btn-delete-all-todo");
const btnDeleteSelected = document.getElementById("btn-delete-selected")

const createNewTodo = () => {
    if (todoForm.value === "") {
        return
    }
    const newTodo = document.createElement("li");
    newTodo.className = "todo-child";
    newTodo.appendChild(document.createTextNode(todoForm.value));
    newTodo.addEventListener("click", (event) => {
        newTodo.classList.toggle("todo-selected");
    }, false);

    const deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "Delete");
    deleteBtn.classList.add("todo-delete-button");
    deleteBtn.addEventListener("click", () => {
        newTodo.parentNode.removeChild(newTodo);
    })

    newTodo.appendChild(deleteBtn);
    todoList.appendChild(newTodo);

    todoForm.value = "";
}

todoForm.addEventListener("keydown", event => {
    if (!event.isComposing && event.keyCode == 13) {
        createNewTodo();
    }
}, false);

btnDeleteAll.addEventListener("click", () => {
    while (todoList.firstChild) { todoList.removeChild(todoList.firstChild) }
}, false);

btnDeleteSelected.addEventListener("click", () => {
    let todoSelected = document.getElementsByClassName("todo-selected");
    len = todoSelected.length;
    for (let i = 0; i < len; i++) {
        todoSelected[0].parentNode.removeChild(todoSelected[0]);
    }
})