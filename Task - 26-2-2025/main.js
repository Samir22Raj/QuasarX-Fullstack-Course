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

// 3. Create a dynamic TIC TAC TOE game
// URL:https://codepen.io/Samir-Rajkarnikar/pen/VYZKXKP