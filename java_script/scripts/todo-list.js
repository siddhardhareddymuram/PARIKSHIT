const todolist=[];

function addTodo(){
   const inputelement= document.querySelector('.js-name-input');
   const name=inputelement.value;
   todolist.push(name);
   console.log(todolist);
   inputelement.value='';
}