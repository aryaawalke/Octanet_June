// Store tasks in an array
let tasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const deadlineInput = document.getElementById("deadlineInput");
  const prioritySelect = document.getElementById("prioritySelect");

  // Get the values from the inputs
  const task = taskInput.value;
  const deadline = deadlineInput.value;
  const priority = prioritySelect.value;

  // Create a task object
  const newTask = {
    task: task,
    deadline: deadline,
    priority: priority
  };

  // Add the new task to the array
  tasks.push(newTask);

  // Clear the input fields
  taskInput.value = "";
  deadlineInput.value = "";

  // Update the task list
  updateTaskList();
}

// Function to update the task list
function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  // Loop through the tasks array and create task elements
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
      <strong>Task:</strong> ${task.task}<br>
      <strong>Deadline:</strong> ${task.deadline}<br>
      <strong>Priority:</strong> ${task.priority}<br>
      <button onclick="removeTask(${index})">Remove</button>
    `;
    taskList.appendChild(taskElement);
  });
}

// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}
