var headerText = document.querySelector(".header_text")
var text = " Subcribe for daily video"

for(let i = 0; i < text.length; i++) {
    let span = document.createElement("span")
    span.textContent =text[i]
    headerText.appendChild(span)
}

var listSpan = document.querySelectorAll(".header_text span")
var index = 0 
setInterval (() => {
 listSpan[index].style.fontSize = '50px'
 index ++
 if(index == listSpan.length){
    index = 0
    resetFontSize()
 }
},200)
const resetFontSize = ()=> {
    listSpan.forEach((span) => {
        span.style.fontSize = '0px'
    })
}