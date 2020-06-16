
let input = document.querySelector('.input');
let ul = document.querySelector(".todo-ul");
let button = document.querySelector('button');


button.disabled = true;

let obj = JSON.parse(localStorage.getItem("obj"));


if (obj == null) {
    console.log("in if");

    anyObj = { todo: ['...'] }
    localStorage.setItem('obj', JSON.stringify(anyObj))
    obj = JSON.parse(localStorage.getItem("obj"));
    console.log(obj);
} else {
    obj.todo.forEach(element => {
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        let text = document.createTextNode(element);
        li.appendChild(text);
        ul.appendChild(li);
    });
}



function add() {
    inputText = input.value;
    console.log(inputText);

    obj.todo.push(inputText);
    console.log(obj.todo);
    localStorage.removeItem('obj')
    obj = localStorage.setItem("obj", JSON.stringify(obj));
    obj = JSON.parse(localStorage.getItem("obj"));
    ul.innerHTML = '';

    obj.todo.forEach(element => {
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        let text = document.createTextNode(element);
        li.appendChild(text);
        ul.appendChild(li);
    });

}

function check() {
    inputText = input.value;

    if (inputText.trim() !== "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

// function remove(vall) {
//     console.log("button", vall);

//     obj = JSON.parse(localStorage.getItem("obj"));
//     let arr = obj.todo;
//     var filtered = arr.filter((value) => value !== vall);
//     console.log(filtered);


// }


