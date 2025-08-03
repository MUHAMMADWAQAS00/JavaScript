let divElement = document.getElementById("mainDiv")
let btnElement = document.getElementById("btn")

btnElement.addEventListener('click',btnClick,true)
divElement.addEventListener('click',divClick,true)

document.body.addEventListener('click',bodyClick,true)

function divClick(){
    console.log("div clicked!!")
}
function btnClick(){
    console.log("btn clicked!!")
}
function bodyClick(){
    console.log("body clicked!!")
}
