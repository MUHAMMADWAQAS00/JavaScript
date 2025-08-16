let inputElement = document.getElementById('input-box')
let listElement = document.getElementById('list-container')


function addTask(){
if(inputElement.value ===''){
    alert("You must write something")
}else{
    let listItem = document.createElement("li")
    listItem.innerHTML = inputElement.value;
    listElement.appendChild(listItem);
    let span = document.createElement('span')
    span.innerHTML = "\u00d7";
    listItem.appendChild(span);

}
inputElement.value = '';
safeTask(); 
}

listElement.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
       safeTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        safeTask();
    }
},false);
inputElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


function safeTask(){
    localStorage.setItem("data",listElement.innerHTML);
}
function show(){
    listElement.innerHTML = localStorage.getItem("data");
}
show();