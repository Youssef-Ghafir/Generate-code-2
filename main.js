let text =document.getElementById('textarea')
let play =document.getElementById('play')
let remove =document.getElementById('remove')
let result =document.getElementById('result')
let removel = document.getElementById ('local')
play.onclick=function () {
    result.childNodes[5].innerHTML=text.value
    localStorage.setItem('Result',text.value)
}
remove.onclick = function  () {
    result.childNodes[5].innerHTML=""
text.value=""
    
}
removel.onclick = function () {
    localStorage.removeItem('Result')
}
window.onload = function  () {
    result.childNodes[5].innerHTML=localStorage.getItem('Result')
    text.value=localStorage.getItem('Result')
}
//menu
let open = document.getElementById('img')
let list =document.getElementById('list')
open.onclick = function () {
    list.classList.toggle('show')
}
//end menu
//sart option
let span =document.querySelectorAll('.list span')
let classy = []
 //create loop
 for (let i = 0; i < span.length; i++) {
    classy.push(span[i].getAttribute('class'))
    //add class and romove 
    span[i].onclick = function () {
        document.body.classList.remove(...classy)
        document.body.classList.add(this.getAttribute('class'))
       localStorage.setItem('pagecolor',this.getAttribute('class'))
    }
 }
console.log(localStorage)
let reset =document.getElementById('reset')
reset.onclick = function () {
    window.location.reload()
}
//
let count = document.getElementById('count')
text.oninput = function () {
    count.innerHTML = text.value.length
}
//auto play 
let autoplay = document.querySelectorAll('.auto-play span')
console.log(autoplay)
autoplay[0].onclick =  
function autopla () {
        text.oninput = function () {
            result.childNodes[5].innerHTML = text.value
            localStorage.setItem('Result',text.value) 
            count.innerHTML = text.value.length
  }
}
autoplay[1].onclick = function () {
    window.location.reload()
}

