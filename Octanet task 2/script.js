// script.js

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const deadlineInput = document.getElementById('deadlineInput');
    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');
    const trashBin = document.getElementById('trashBin');
    const completeSelectedButton = document.getElementById('completeSelected');
    const deleteSelectedButton = document.getElementById('deleteSelected');
    const deleteAllButton = document.getElementById('deleteAll');
    const taskButtons = document.querySelector('.task-buttons');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value, deadlineInput.value);
        taskForm.reset();
    });

    function addTask(task, deadline) {
        const taskItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');

        const taskText = document.createElement('span');
        taskText.textContent = `${task} (Due: ${deadline})`;

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskList.appendChild(taskItem);

        updateTaskButtonsVisibility();
    }

    function deleteTask(taskItem) {
        trashBin.classList.add('trashActive');
        taskItem.classList.add('taskMoveToTrash');

        taskItem.addEventListener('animationend', () => {
            taskItem.remove();
            trashBin.classList.remove('trashActive');
            updateTaskButtonsVisibility();
        });
    }

    function completeTask(taskItem) {
        taskItem.classList.add('completed');
        const checkbox = taskItem.querySelector('.checkbox');
        if (checkbox) checkbox.remove();
        completedTaskList.appendChild(taskItem);
        updateTaskButtonsVisibility();
    }

    completeSelectedButton.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const taskItem = checkbox.parentElement;
                completeTask(taskItem);
            }
        });
    });

    deleteSelectedButton.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const taskItem = checkbox.parentElement;
                deleteTask(taskItem);
            }
        });
    });

    deleteAllButton.addEventListener('click', () => {
        const tasks = document.querySelectorAll('#taskList li');
        tasks.forEach(taskItem => {
            deleteTask(taskItem);
        });
    });

    function updateTaskButtonsVisibility() {
        const tasks = document.querySelectorAll('#taskList li');
        if (tasks.length > 0) {
            taskButtons.classList.add('visible');
        } else {
            taskButtons.classList.remove('visible');
        }
    }
});
