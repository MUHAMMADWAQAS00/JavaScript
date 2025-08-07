//in this practQ we learn
//load and DOMcontentLoaded  eventlistners
//it works when we try  to load something

window.addEventListener('DOMContentLoaded',function(){
    let heading = document.getElementById('main')
    heading.textContent = "DOM loaded"
})

window.addEventListener('load',function(){
    this.alert("page is fully  loaded")
})