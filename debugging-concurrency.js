/*
Error-Based Debugging: Fix this code to ensure that fetchData logs "Completed!" only after all tasks finish:

function fetchData() {
    setTimeout(() => console.log("Task 1"), 0);
    console.log("Task 2");
    Promise.resolve().then(() => console.log("Task 3"));
    console.log("Completed!");
}
fetchData();



*/


function fetchData() {
    Promise.resolve()
    .then(() =>  console.log("Task 1"))
    .then(() =>  console.log("Task 2"))
    .then(() =>  console.log("Task 3"))
    .then(() =>  console.log("Completed!"));
}
fetchData();

