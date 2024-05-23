// Background image change on card hover
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', function() {
        document.body.style.backgroundImage = `url(${this.dataset.image})`;
    });

    card.addEventListener('mouseout', function() {
        document.body.style.backgroundImage = "url('Images/back.jpg')";
    });
});

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
            editTask(listItem);
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

function editTask(listItem) {
    var taskText = listItem.childNodes[0].nodeValue;
    var newTask = prompt("Edit your task:", taskText);
    if (newTask && newTask.trim() !== '') {
        listItem.childNodes[0].nodeValue = newTask.trim();
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
