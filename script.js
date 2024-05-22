function addTask(category) {
    var input = document.getElementById(category + '-input');
    var list = document.getElementById(category + '-list');

    if (input.value.trim() !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = input.value;

        // Add edit, delete, and done buttons
        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            editTask(listItem, category);
        };

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deleteTask(listItem);
        };

        var doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.onclick = function() {
            markDone(listItem);
        };

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        listItem.appendChild(doneButton);

        list.appendChild(listItem);
        input.value = '';
    }
}

function editTask(listItem, category) {
    var newTask = prompt("Edit your task:", listItem.childNodes[0].nodeValue);
    if (newTask) {
        listItem.childNodes[0].nodeValue = newTask;
    }
}

function deleteTask(listItem) {
    listItem.remove();
}

function markDone(listItem) {
    listItem.classList.toggle('done');
}

function clearList(category) {
    var list = document.getElementById(category + '-list');
    list.innerHTML = '';
}
