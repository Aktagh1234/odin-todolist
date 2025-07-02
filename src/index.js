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

    //click event to submit a new todo
    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", createToDo);
})();