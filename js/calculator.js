// ************************ Affichage ***************************************


// data digits 
var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,".","="];
var digits_container = document.getElementById('digits');

digits.forEach(function(item) {
    var digit_btn = document.createElement('button');
    var display_btn= document.createTextNode(item);

    //Display Elements
    digits_container.appendChild(digit_btn);
    digit_btn.appendChild(display_btn);

    //Buttons attributes 
    digit_btn.setAttribute("type", "button");
    digit_btn.setAttribute("value", item);
    digit_btn.setAttribute("textContent", item); 
    if (item.valueOf() === "." || item.valueOf() === "=")
    {digit_btn.setAttribute("style","color:red; font-weight:700");}
    
    
});

//data operators 
var operators = ["C", "/","*","-","+"]
var operators_container = document.getElementById('operators');

operators.forEach(function (item) {
    var operator_btn = document.createElement('button');
    var display_btn = document.createTextNode(item);
    
    //Display Elements
    operators_container.appendChild(operator_btn);
    operator_btn.appendChild(display_btn);
    
    //Buttons attributes 
    operator_btn.setAttribute("type", "button");
    operator_btn.setAttribute("value", item);
    operator_btn.setAttribute("textContent", item);
    if (item.valueOf() === "C" || item.valueOf() === "=")
    {operator_btn.setAttribute("style","color:red; font-weight:700");}
});


// ************************ Logique ***************************************

var digit_btn_array= Array.from(digits_container.children);
var operators_btn_array= Array.from(operators_container.children)

digit_btn_array.forEach(function(btn) {
    btn.addEventListener('click',function (el) {
        var btn_value =  el.target.value;
        if (btn_value !== '=') {
            document.createTextNode(btn_value);
            screen_input.value += btn_value;
        }else{
            var result = eval(screen_input.value);
            screen_input.value = result;
            console.log(result);
            
        }
    })
});

operators_btn_array.forEach(function(btn) {
    btn.addEventListener('click',function (el) {
        var btn_value = el.target.value;
        if (btn_value !== 'C') {
            document.createTextNode(btn_value);
            screen_input.value += btn_value;
            console.log(screen_input.value);
        } else {
            screen_input.value = null;
        }
    })
});
