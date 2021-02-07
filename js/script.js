// Business Logic
function ToDoItems(item,isDone){
    this.task = item;
    this.isDone = isDone;
}

displayTask()
const form = document.getElementById("addTask");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const item = document.getElementById("item").value;
    const isNew = false;

    let tasks = new ToDoItems(item,isNew);
    if(item){
        addToLocalStorage(tasks)
    }
    location.reload()
})

function addToLocalStorage(todoItems){
    const tasks = getItemsFromLocalStorage();
    localStorage.setItem("tasks",JSON.stringify([...tasks,todoItems]));
};

function removeItem(){

};
function  getItemsFromLocalStorage(){
    const todos = JSON.parse(localStorage.getItem("tasks"));

    return todos == null ? [] : todos ;
};

function displayTask(){
    const tasks = getItemsFromLocalStorage();
    const div = document.querySelector(".todoItems");
    tasks.map(task=>{
        const ul =  document.createElement("ul");
        ul.className="items"
        ul.innerHTML = `<li><input type="checkbox"><span>${task.task}</span> <button class="delete"><i class="fas fa-trash-alt"></i></button></li>`;
        div.appendChild(ul)
    })
    const deleteBtn = document.querySelectorAll(".delete");
    for(i=0;i < deleteBtn.length;i++){
        deleteBtn[i].addEventListener("click",()=>{
            console.log("Are you sure you want to delete")
        })
    }

};
