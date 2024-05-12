var Toastbox = document.getElementById("toastbox");
var successMsg = '<i class="fa-solid fa-circle-check" ></i>Successfully Done' ;
var errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please check for errors!';
var invalidMsg = '<i class="fa-solid fa-circle-exclamation" ></i>Enter valid input';


function showToast(msg){
    let box = document.createElement("div");
    box.classList.add("toast");
    box.innerHTML = msg;
    Toastbox.appendChild(box);

    if(msg.includes('error')){
        box.classList.add('error');
    }
    if(msg.includes('valid')){
        box.classList.add('valid')
    }

    setTimeout(()=>{
        box.remove();
    },6000);
}