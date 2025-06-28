export const blankProjectLoad = () => {

    console.log("Blank Project Loaded");
    let projectArray = [];
    console.log("Pushing title to the project array");
    let projectTitle = "Default Project";
    projectArray.push(projectTitle);
    console.log(projectArray);
    return {
        projectArray: projectArray,
        projectTitle: projectTitle
    };    
}