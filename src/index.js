import {createToDo} from './create-to-do.js';
import {blankProjectLoad} from './blank-project.js';
import { displayDefaultProject, displayTheForm, addItemToCheckList, clearForm} from './dom-manip.js';
import './style.css';

blankProjectLoad();

// ToDo click event
let clickEventsModule = (function(){
    //click event for displaying the form
    const addNewToDo = document.querySelector(".add-new-todo");
    addNewToDo.addEventListener("click", displayTheForm);

    //click event for adding item to checklist
    const addItemToCheckList = document.querySelector("add-to-checklist");
    addItemToCheckList.addEventListener("click", addItemToCheckList);

    //click event for clearing the form
    const clearForm = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);
})();

//Calls createToDO
const myTodo = createToDO("Grocery Run", "Buy groceries for the week", "2023-10-15", "High", "Low");
const myTodo2 = createToDO("Gym", "Go to the gym in the evening", "2023-10-16", "Medium", "Low");
console.log("Show properties of myTodo from index.js", myTodo);
console.log("Show properties of myTodo2 from index.js", myTodo2);