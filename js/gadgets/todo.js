// Elements DOM *****************************************************************************
var container = document.getElementById('container')
  , list_container = document.getElementById('list')
  , todo_form = document.getElementById('todo-form')
  , todo_input = document.getElementById('todo-input')
  , delete_btn_group = []
  , text_area_group = [];

// Ajout éléments dans la Todo-List **********************************************************
todo_form.addEventListener('submit', function (e) {
    var li = document.createElement('li')
      , text_node = document.createTextNode(todo_input.value);

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
