var arr = [
    {
        dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1514654306380-538bac0ed82c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
         {
        dp:"https://images.unsplash.com/photo-1514654306380-538bac0ed82c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
        {
        dp:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1556347961-f9521a88cb8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
        {
        dp:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1691692677524-7ee6b93adffd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
]

var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
   clutter += ` <div class="story">
                <img id="${idx}" src="${elem.dp}" alt="my img">
            </div> `
})

storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
 document.querySelector("#full-screen").style.display = "block"
 document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
 setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
 },3000)

})