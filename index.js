const input = document.querySelector("#input");
const button = document.querySelector("#btn");
button.addEventListener("click", function () {
    if (input.vlue !== "") {
        let listItem = document.createElement("li");
        listItem.innerHTML = input.value;
        let TaskList = document.querySelector("#list ul");
        TaskList.appendChild(listItem);
        input.value = "";
        listItem.addEventListener("click", function () {
            listItem.style.textDecoration = "line-through";
        });
        listItem.addEventListener("dblclick", function () {
            TaskList.removeChild(listItem);
        });
    }
    else {
        alert("eror");
    }

})

