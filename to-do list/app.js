const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // Don't add empty tasks

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => li.remove();

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = ''; // Clear input field
}
