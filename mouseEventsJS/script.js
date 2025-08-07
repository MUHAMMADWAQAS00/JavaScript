//in this practice Q we learn about mouse event listners
//click--contextmenu--dblclick--mouseover--mouseout

let element = document.getElementById('btn')
element.addEventListener('click',function(){
    console.log("you clicked me")
})

element.addEventListener('dblclick',function(){

console.log('you clicked double me')
})

element.addEventListener('mouseover',function(){
    console.log("mouse overed on me ")
})

element.addEventListener('contextmenu',function(){
    console.log(" you click Right click btn of mouse using context menu")
})

element.addEventListener('mouseout',function(){
    console.log("mouse out from me (I'm button)")
})