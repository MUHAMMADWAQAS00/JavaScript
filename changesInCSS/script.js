let element = document.getElementById("box")
//adding class using className property
//element.className += " color"


//viewing all classes using classList
//console.log(element.classList)

//viewing classes one by one using FOR OF loop 
//for(let style of element.classList){
  //  console.log(style)
//}

//adding class or remove class using add and remove property
//element.classList.add("color")
//element.classList.remove("square")

//replacing class name using replace property
//element.classList.replace("square","color")

//how to check existance of a class
//let result = element.classList.contains("color")
//console.log(result)

//toggle works like inverse if class already exist/add toggle remove its if it's not added toggle add it 
element.classList.toggle("color")


//we learn in this code about
//className = we can view or add
//classList = we can see all classes
//for of loop
// replace = replace classname using cList and replace property
//contains = using conatins property we can check either that class is added or not it will give us answer in true or false
//toggle = toggle works like inverse if class already exist/add toggle remove its if it's not added toggle add it