import { blankProjectLoad } from "./blank-project.js";

export function displayDefaultProject() {
    const projectsInfoDiv = document.createElement('div');
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}

export function displayTheForm() {
    document.getElementById("add-todo-form").style.display = "";
}
export function addItemToCheckList() {
    const addItem = document.getElementById("add-to-checklist").value;
    //run to check if the event box is empty and the button was clicked
    //if so, do nothing
    //if not, apply contents to the new list
    if (addItem !== ""){
        const ul = document.querySelector('.todo-ul');
        const li = document.createElement('li');
        li.textContent = addItem;
        const span = document.createElement('span');
        span.className = "remove-checklist-item";
        const removeIcon = document.createTextNode("\u00D7");
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById("add-to-checklist").value = "";

        //DOM check for existing checklist items already present
        if (document.querySelectorAll("li").length > 0) {
            console.log("INSIDE MODULE IF.....", document.querySelectorAll("li").length);
            const nodeListCheckList = document.querySelectorAll("li");
            console.log(nodeListCheckList);

            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeFromCheckList() {
                    checkListItem.remove();
                });
            })
        }
    } else return;
} 

export function clearForm() {
    const nodeListCheckList = document.querySelectorAll("li");
    for (let i = 0; i < nodeListCheckList.length; i++) {
        nodeListCheckList[i].remove();
    }
    document.getElementById("add-todo").reset();
}

export function displayToDo() {

    //gather data from local backend to initialize
    const Title = localStorage.getItem("Title");
    const Description = localStorage.getItem("Description");
    const DueDate = localStorage.getItem("DueDate");
    const Priority = localStorage.getItem("Priority");
    const CheckList = localStorage.getItem("CheckList");

    //check to ensure their is local storage to load
    if( Title === null || Description === null || DueDate === null || Priority === null || CheckList === null) {
        return;
    }

    //check and clear current display dom
    const removeDivs = document.querySelectorAll(".card");
    console.log("Remove Divs: ", removeDivs);
    removeDivs.forEach(div => div.remove());

    //create the display card for the display DOM
    console.log("Displaying ToDo");
    const projects = document.querySelector(".projects");
    const card = document.createElement("div");
    card.classList.add("card");
    projects.appendChild(card);

    //create delete todo button
    const deleteToDoButton = document.createElement("button");
    deleteToDoButton.classList.add("remove-todo-button");
    deleteToDoButton.textContent = "Delete ToDo";
    card.appendChild(deleteToDoButton);
    deleteToDoButton.addEventListener("click", function deleteToDo() {
        card.remove();
        localStorage.clear();
        console.log("ToDo deleted and local storage cleared.");
    });

    //place data in local temp array
    let displayArray = {Title, Description, DueDate, Priority, CheckList};
    console.log(displayArray);

    for (let key in displayArray) {
        console.log(`${key}: ${displayArray[key]}`);
        const para = document.createElement("p");
        para.textContent = (`${key}: ${displayArray[key]}`);
        card.appendChild(para);
    }

    //DOM for checklist items
    const checkListLabel = document.createElement("p");
    checkListLabel.textContent = "CheckList Items:";
    checkListLabel.classList.add("check-list-label");
    const ul = document.createElement("ul");
    ul.appendChild(checkListLabel);
    card.appendChild(ul);

    console.log("CheckList: ", CheckList);
    let _checkListArray = CheckList.split(", ");
    console.log("CheckList Array: ", _checkListArray);

    if(CheckList !== "") {
        for (let i = 0; i < _checkListArray.length; i++) {
            const li = document.createElement("li");
            li.className = "display-li";
            li.textContent = _checkListArray[i];

            //add toggle css to strikethrough text
            li.addEventListener("click", function strikeOutCheckListItem() {
                if (li.classList.toggle("done")) {
                    localStorage.setItem(li.textContent, "true");
                } else {
                    li.classList.remove("done");
                    localStorage.setItem(li.textContent, "false");
                }
            });
            ul.appendChild(li);
        }
    } else return;

    //call on page to refresh and check for existing strikthroughs
    window.onload = function() {
        
        //loop through all checklist items
        const liNodes = document.querySelectorAll(".display-li");
        liNodes.forEach(li => {
            //check local storage for strikethroughs
            if (localStorage.getItem(li.textContent) === "true") {
                liNodes.className = "done";
            }
        });
    }
}