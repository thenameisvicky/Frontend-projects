var text = document.getElementById("text"); 
var qrImage = document.getElementById("qrImage");
var imageBox = document.getElementById("imgBox");

function generateQr() {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value; 
    imageBox.classList.add("show-img");
}
