import { compareAsc, format, parseISO, startOfToday } from 'date-fns';
import {clearForm} from './dom-manip';

let toDoArray = [];

export const createToDo = () => {
    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;

    //check to see if empty value exists
    if (Title === "" || Description === "" || DueDate === "" ){
        alert("Please fill in all fields before submitting.");
        return;
    }

    //check if DueDate is in the past
    if (parseISO(DueDate) < startOfToday()) {
        alert("Due date cannot be in the past. Please select a valid date.");
        return;
    }

    const nodeListCheckList = document.querySelectorAll(".form-li");
    let checkListArray =[];
    for(let i = 0; i < nodeListCheckList.length; i++) {
        let strippedCheckList = nodeListCheckList[i].textContent.replace("\u00D7", '');
            checkListArray.push(strippedCheckList);
    }

    let CheckList = checkListArray.join(", ");

    toDoArray.push({Title, Description, DueDate, Priority, CheckList});
    console.log(toDoArray);

    saveToDoLocal({Title, Description, DueDate, Priority}, CheckList);

    clearForm();

    return{Title, Description, DueDate, Priority, CheckList};

}