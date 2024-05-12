var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup") 

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var canclepopup = document.getElementById("cancle-note")
canclepopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container = document.querySelector(".container")
var addnote = document.getElementById("note-add")
var notetitle = document.getElementById("note-title-input")
var shortdescription = document.getElementById("note-shortdescription-input")
var content = document.getElementById("note-content-input")

addnote.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","note-container")
    div.innerHTML=`<h2>${notetitle.value}</h2>
    <h5>${shortdescription.value}</h5>
    <p>${content.value}</p>
    <button onclick="deletepanel(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})



function deletepanel(event)
{
    event.target.parentElement.remove()    
}