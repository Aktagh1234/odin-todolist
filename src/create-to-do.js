let toDoArray = [];

export const createToDo = (title, description, dueDate, priority, CheckList) => {
    console.log("Creating a new To-Do item");
    console.log(title, description, dueDate, priority, CheckList);
    console.log("pushing toDo to the array");
    toDoArray.push({title, description, dueDate, priority, CheckList});
    console.log(toDoArray);
    return {title, description, dueDate, priority, CheckList};
};