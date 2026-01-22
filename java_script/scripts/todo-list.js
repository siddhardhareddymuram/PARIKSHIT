const todolist=['make dinner', 'eat dinner', 'make EVS report and PPT'];
let todoListHTML='';
for(let i=0;i<todolist.length;i++ ){
   const todo=todolist[i];
   const html=`<p>${todo}<\p>`;
   todoListHTML+=html;
}
console.log(todoListHTML);
document.querySelector('.js-name-input');
.innerHTML=todoListHTML;
function addTodo(){
   const inputelement= document.querySelector('.js-name-input');
   const name=inputelement.value;
   todolist.push(name);
   console.log(todolist);
   inputelement.value='';
}