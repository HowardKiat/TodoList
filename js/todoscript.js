// Get Elements From Lists
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
//Check Box On Item Lists

// Add new item to list with "Add" button
function newElement() {
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

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "Close";
    span.appendChild(txt);
    li.appendChild(span);

    for( i = 0; i <close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}