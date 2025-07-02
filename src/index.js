import {createToDo} from './create-to-do.js';
import {blankProjectLoad} from './blank-project.js';
import { displayDefaultProject, displayTheForm, addItemToCheckList, clearForm} from './dom-manip.js';
import './styles.css';

blankProjectLoad();

// ToDo click event
let clickEventsModule = (function(){
    //click event for displaying the form
    const addNewToDo = document.querySelector(".add-todo-button");
    if (addNewToDo) addNewToDo.addEventListener("click", displayTheForm);

    //click event for adding item to checklist
    const addToCheckListBtn = document.querySelector(".add-to-checklist");
    if (addToCheckListBtn) addToCheckListBtn.addEventListener("click", addItemToCheckList);

    //click event for clearing the form
    const resetButton = document.querySelector(".reset-button");
    if (resetButton) resetButton.addEventListener("click", clearForm);

    //click event to submit a new todo
    const addToDoForm = document.getElementById("add-todo");
    if (addToDoForm) addToDoForm.addEventListener("submit", function(e) {
        e.preventDefault();
        createToDo(e);
    });
})();