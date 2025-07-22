var a = document.querySelector('h1')
a.addEventListener("click",function(){
a.innerHTML = "dekha jadoo";
a.style.color = "yellow"
a.style.backgroundColor = "black"
})
// console.log(a)

var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var start = 0;

    btn.addEventListener("click",function(){
    if(start == 0){
    bulb.style.backgroundColor = "yellow"
    console.log('Cliocked')
    start = 1;

    }else{
        bulb.style.backgroundColor = "transparent"
        console.log("Again clieckedf")
        start = 0;
    }
    console.log('btn')
 })


