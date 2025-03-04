// 1. To-do List for adding or removing work list dynamically (already given)
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  //Preventing the default form submission behavior, which refreshes the page.
  event.preventDefault();
  const newTask = todoInput.value;

  if (newTask === '') {
      alert('Please enter a task!');
      return;
  }

  addTask(newTask);

  // Clear the input field after adding a task
  todoInput.value = ''; 
});

//function to add task, also contains edit, delete and mark complete functionalities
function addTask(task) {
  const listItem = document.createElement('li');
  const addingTask = document.createElement('span');
  addingTask.classList.add('task');
  listItem.appendChild(addingTask);

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  addingTask.appendChild(checkBox);

  const taskText = document.createElement('span');
  taskText.textContent = task;
  addingTask.appendChild(taskText);

  const buttons = document.createElement('span');
  buttons.classList.add('buttons');
  
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('btn', 'edit-btn');
  buttons.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('btn','delete-btn');
  buttons.appendChild(deleteButton);

  listItem.appendChild(buttons);

  todoList.appendChild(listItem);

  //an event listener to the checkbox, click to strike text
  checkBox.addEventListener('change', function() {
    if (this.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
  });
  
  //event listener to the delete button, click to delete task
  deleteButton.addEventListener('click', function() {
    todoList.removeChild(listItem);
  });

  //event listener to the edit button, editing task
  editButton.addEventListener('click', function() {
    const isEditing = listItem.classList.contains('editing');
  
    if (isEditing) {
        // Switch back to view mode
        taskText.textContent = this.parentElement.previousSibling.lastChild.value;
        addingTask.appendChild(taskText); 
        addingTask.removeChild(this.parentElement.previousSibling.lastChild.previousSibling);
        listItem.classList.remove('editing');
        editButton.textContent = 'Edit';
    } else {
        // Switch to edit mode
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskText.textContent;
        addingTask.insertBefore(input, taskText);
        addingTask.removeChild(taskText);
        listItem.classList.add('editing');
        editButton.textContent = 'Save';
    }
  });
}

// 2. Image gallery: create a box with cover image
// where a user can click and open the box and images should appear
// upon clicking a image, the image should expand and get focused and the background should get blurred or maybe DIM LIGHT 

// also on the expanded image, create a cross bottom on top left to go to default gallery view

document.addEventListener("DOMContentLoaded", function () {
  // Get modal elements
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var captionText = document.getElementById("caption");

  // Select all images inside .image and add click event listener
  var images = document.querySelectorAll(".image img");

  images.forEach(function (img) {
      img.addEventListener("click", function () {
          modal.style.display = "flex"; 
          modalImg.src = this.src; 
          captionText.innerHTML = this.alt; 
      });
  });

  // Close the modal when clicking the close button
  document.querySelector(".close").addEventListener("click", function () {
      modal.style.display = "none";
  });
});

// 3. Create a dynamic TIC TAC TOE game
let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset");
let player = document.querySelector("#player");
let notify = document.querySelector("#turn");
let newGame = document.querySelector("#newgame");
let results = document.querySelector(".results");
let msg = document.querySelector(".message");

let turnO = true; //player O goes first
let clickCount = 0;

const winPatters = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      player.innerText = `X`;
      turnO = false;
      box.disabled = true;
      clickCount++;
      if(!box.classList.contains('red')){
        box.classList.add('red');
      }
    } 
    else {
      box.innerText = "X";
      player.innerText = `O`;
      box.disabled = true;
      turnO = true;
      if(!box.classList.contains('black')){
        box.classList.add('black');
      }
    }
    box.disaled = true;
    checkWinner();
    if (clickCount == 9) {
      msg.innerText = `Game has ended in draw.`;
      results.classList.remove("hide");
      notify.classList.add("hide");
      resetGame.classList.add("hide");
      disableBoxes();
    }
  });
});

const checkWinner = () => {
  for (let pattern of winPatters) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        winMessage(posVal1);
      }
    }
  }
};

const winMessage = (winner) => {
  msg.innerText = `Congratulations, ${winner} is the winner`;
  results.classList.remove("hide");
  disableBoxes();
  notify.classList.add("hide");
  resetGame.classList.add("hide");
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true; 
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove('red', 'black');
  }
};

const reset = () => {
  turnO = true;
  enableBoxes();
  results.classList.add("hide");
  clickCount = 0;
  resetGame.classList.remove("hide");
  notify.classList.remove("hide");
};

newGame.addEventListener("click", reset);
resetGame.addEventListener("click", reset);
