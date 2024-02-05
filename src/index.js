import './style.css';
import profilePicture from './assets/img/profilepicture.png'

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('#task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const profileImage = document.getElementById('profile-image');

    profileImage.src = profilePicture;

    addButton.onsubmit = function(e) {
        e.preventDefault();
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
            saveTasks();
        }
    };

    taskList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
            saveTasks();
        } else if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
            saveTasks();
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Finsihed';
        li.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks.forEach(task => {
            addTask(task);
        });
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(taskItem => {
            tasks.push(taskItem.textContent.replace('Delete', '').trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    loadTasks();
});
