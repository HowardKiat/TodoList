let li;


// Create a "close" button and append it to each list item
let inputField = document.querySelectorAll(".lists li");


let i; 
for(i = 0; i < inputField.length ; i++) {
    inputField[i].appendChild(createCloseBtn());
}


//Check Box On Item Lists
// const list = document.querySelector('ul');

function listCheckboxHandler(evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('checked');
    }
}

// Add new item to list with "Add" button
function addTask() {
    li = document.createElement("li");
    let inputValue = document.getElementsByName("newTask")[0].value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something");
    } else {
        document.querySelector(".lists").appendChild(li);
        li.appendChild(createCloseBtn());
    }

    document.getElementsByName("newTask")[0].value ="";
}

// Close Button
function createCloseBtn() {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "Close";
    span.appendChild(txt);
    
// Evt Close Button
    span.addEventListener('click', function () {
        var div = this.parentElement;
        div.style.display = "none";
    });

    return span;
    }



function deleteCompletedTask() {
    let completedTasks = document.querySelectorAll('.lists li.checked');

    completedTasks.forEach(task => {
        task.parentNode.removeChild(task);
    });
}
