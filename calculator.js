
var cal = document.getElementById("cal");
var zero = document.getElementById('zero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var add = document.getElementById('add');
var sub = document.getElementById('sub');
var divide = document.getElementById('divide');
var mul = document.getElementById('mul');
zero.onclick = function(){
    var current = cal.value;
    cal.value = current + zero.innerHTML;
}
one.onclick = function(){
    var current = cal.value;
    cal.value = current + one.innerHTML;
}
two.onclick = function(){
    var current = cal.value;
    cal.value = current + two.innerHTML;
}
three.onclick = function(){
    var current = cal.value;
    cal.value = current + three.innerHTML;
}
four.onclick = function(){
    var current = cal.value;
    cal.value = current + four.innerHTML;
}
five.onclick = function(){
    var current = cal.value;
    cal.value = current + five.innerHTML;
}
six.onclick = function(){
    var current = cal.value;
    cal.value = current + six.innerHTML;
}
seven.onclick = function(){
    var current = cal.value;
    cal.value = current + seven.innerHTML;
}
eight.onclick = function(){
    var current = cal.value;
    cal.value = current + eight.innerHTML;
}
nine.onclick = function(){
    var current = cal.value;
    cal.value = current + nine.innerHTML;
}
add.onclick = function(){
    var current = cal.value;
    cal.value = current + add.innerHTML;
}
sub.onclick = function(){
    var current = cal.value;
    cal.value = current + sub.innerHTML;
}
mul.onclick = function(){
    var current = cal.value;
    cal.value = current + mul.innerHTML;
}
divide.onclick = function(){
    var current = cal.value;
    cal.value = current + divide.innerHTML;
}



//equals button handling
var equal = document.getElementById("equal");
equal.onclick= function(){
    var cal = document.getElementById("cal");
    var currentvalue = cal.value;
    var result = eval(currentvalue);
    cal.value = result
}


//styling of calculator;
var container = document.getElementById("container");
var heading = document.getElementById("heading");
document.body.style.backgroundColor= "lightblue";
heading.setAttribute(
    "style", 
    `
        text-align: center;
        color: black;
    `
)
cal.setAttribute( 
    "style", 
    `
        font-weight: bold;
        margin: 2px;
        border: 2px solid;
        // padding: 2px;
    `
)

zero.setAttribute(
    "style", 
    `
        border: 2px solid;
        font-weight: bold;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)
one.setAttribute(
    "style", 
    `
        border: 2px solid;
        padding: 0px 20px 0px 20px;       
        margin: 3px;
    `
)
two.setAttribute(
    "style", 
    `
        border: 2px solid;
        border: 2px solid;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)

//2nd row
three.setAttribute(
    "style", 
    `
        border: 2px solid;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)
four.setAttribute(
    "style", 
    `
        border: 2px solid;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)
five.setAttribute(
    "style", 
    `
        border: 2px solid;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)

//3rd row
six.setAttribute(
    "style", 
    `
        border: 2px solid;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)
seven.setAttribute(
    "style", 
    `
        border: 2px solid;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)
eight.setAttribute(
    "style", 
    `
        border: 2px solid;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)

//4th row;
nine.setAttribute(
    "style", 
    `
        border: 2px solid;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)
add.setAttribute(
    "style", 
    `
        border: 2px solid;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)
sub.setAttribute(
    "style", 
    `
        border: 2px solid;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)


//5th row;
mul.setAttribute(
    "style", 
    `
        border: 2px solid;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)
divide.setAttribute(
    "style", 
    `
        border: 2px solid;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)
equal.setAttribute(
    "style", 
    `
        border: 2px solid;
        padding: 0px 20px 0px 20px; 
        margin: 3px;      
    `
)