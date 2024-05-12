var inputbox = document.getElementById("inputbox");
var listcontainer = document.getElementById("listcontainer");
var addbutton= document.getElementById("add");

addbutton.addEventListener("click",function(){
    if(inputbox.value===''){
        alert("You must write something!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="❌";
        li.appendChild(span);
    }
    inputbox.value='';
    saveData();
})

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName  ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();