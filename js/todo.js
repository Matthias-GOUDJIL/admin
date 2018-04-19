// Elements DOM
var container = document.getElementById('container');
var list_container = document.getElementById('list');
var todo_form = document.getElementById('todo-form');
var todo_input = document.getElementById('todo-input');
var delete_btn_group = [];
var text_area_group = [];

// Ajout éléments dans la Todo-List
todo_form.addEventListener('submit', function (e) {
    var li = document.createElement('li');
    var text_node = document.createTextNode(todo_input.value);

    var text_area = document.createElement('textarea');
    text_area_group.push(text_area);
    text_area.onmousedown = function  (event) {
    event.stopPropagation();
    }
    
    var delete_btn = document.createElement('button');
    delete_btn.setAttribute('type', 'button');
    delete_btn.textContent="X";
    delete_btn_group.push(delete_btn);
    delete_btn.onclick = function () {
        this.parentElement.remove();
    }
    
    list_container.appendChild(li);
    li.appendChild(text_area);
    li.appendChild(delete_btn);
    text_area.appendChild(text_node);

    todo_input.value = "";
    e.preventDefault();
});
