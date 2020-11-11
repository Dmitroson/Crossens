// Created by Kotenko Oleksandr, Kozak Sergiy, Kryvonos Myhailo

let container = document.querySelector('div.container');
let selectedElement;

container.onclick = function(event){
    let target = event.target;
    if(target.tagName != 'DIV')
        return;

    highlight(target);
}

function highlight(element){
    if(selectedElement){
        selectedElement.classList.remove('active');
        selectedElement.firstChild.style.visibility = 'hidden';
    }

    selectedElement = element;
    selectedElement.firstChild.style.visibility = 'visible';
    selectedElement.classList.add('active');
}


let button = document.querySelector('a.button');
let input = document.querySelector('input');

button.addEventListener('click', function(){
   let answer = input.value.toLowerCase();
   if(answer == 'recursion')
       document.body.style.backgroundColor = 'green';
   else{
       document.body.style.backgroundColor = 'red';
   }
});