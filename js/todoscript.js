// Create a "close" button and append it to each list item
let inputField = document.querySelectorAll(".lists li");
// console.log(inputField);
let i; 
for(i = 0; i < inputField.length ; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "Close";
    span.appendChild(txt);
    inputField[i].appendChild(span);
}

// Click on a close button to crossover current list item






//Check Box On Item Lists
// const list = document.querySelector('ul');

function listCheckboxHandler(evt) {
    if (evt.target.tagName === 'li') {
        evt.target.classList.toggle('checked');
    }
}

// Add new item to list with "Add" button
function addTask() {
    let li = document.createElement("li");
    let inputValue = document.getElementsByName("newTask")[0].value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something");
    } else {
        document.querySelector(".lists").appendChild(li);
    }
    document.getElementsByName("newTask").value ="";
}

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "Close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
    span.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    
        }
    }



function deleteCompletedTask() {
    let completedTasks = document.querySelectorAll('.lists li.checked');

    completedTasks.forEach(task => {
        task.parentNode.removeChild(task);
    });
}
