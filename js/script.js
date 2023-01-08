const newTask = document.getElementById("addtask");
const list = document.getElementById("list");
const row = document.getElementsByClassName("row");


newTask.addEventListener("click", () => {

    const input = document.getElementById("todoinput");

    if (!input.value) {
        alert("Please fill the input")
        return;
    }
    var task = input.value;

    const div = document.createElement("div");
    div.className = "itemList mt-2 col-12 col-md-10 col-xl-7";
    list.appendChild(div);

    const li = document.createElement("li");
    li.className = "newList";
    li.innerText = task;
    div.appendChild(li);

    const edit = document.createElement("button");
    edit.innerHTML = "Edit";
    edit.className = "btn btn-warning";
    div.appendChild(edit);

    const del = document.createElement("button");
    del.innerText = "Delete";
    del.className = "btn btn-danger";
    div.appendChild(del);

    input.value = "";

    del.addEventListener("click", () => {
        list.removeChild(div)
    })

    edit.addEventListener("click", () => {
        if (edit.innerText.toLowerCase() == "edit") {
            li.contentEditable = true;
            li.style.background = "#fff"
            li.style.color = "#000"
            edit.innerText = "Save";
        } else {
            li.contentEditable = false;
            li.style.color = "#fff"
            li.style.background = "none"
            edit.innerText = "Edit";
        }
    })

})
