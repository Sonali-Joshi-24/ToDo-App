// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event listener
todoButton.addEventListener('click',addTodo);

// Functions
function addTodo(event){
    // prevent form from submitting
    event.preventDefault();
    // add todo DIV
    const todoDIV = document.createElement('div');
    todoDIV.classList.add('todo');
    // create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'Hey';
    newTodo.classList.add('todo-item');
    todoDIV.appendChild(newTodo);
    // Check mark button
    const completedButton = document.createElement('button')
    completedButton
}