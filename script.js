let input = document.querySelector("#input");
let addBtn = document.querySelector("#addItems");
let itemList = document.querySelector("#todo-list");

//ADD button event
addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const newTask = input.value;

  if (newTask === "") {
    alert("Please enter a task!!");
  }

  input.value = "";
  addTask(newTask);
});

//Adding Tasks
function addTask(task) {
  const listItem = document.createElement("li");
  listItem.textContent = task;

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });

  //add checkbox
  const emptyBox = document.createElement("img");
  emptyBox.src = "emptybox.png";
  emptyBox.classList.add("checkBox");

  emptyBox.addEventListener("click", () => {
    if (emptyBox.src.endsWith("emptybox.png")) {
      emptyBox.src = "checkbox.png";
      listItem.classList.add("completed");
    } else {
      emptyBox.src = "emptybox.png";
      listItem.classList.remove("completed");
    }
  });

  //div that stores deleteBtn and cgeckBox togather
  const taskButtons = document.createElement("div");
  taskButtons.classList.add("taskbuttons");

  itemList.appendChild(listItem);
  listItem.appendChild(taskButtons);
  taskButtons.appendChild(deleteBtn);
  taskButtons.appendChild(emptyBox);
}
