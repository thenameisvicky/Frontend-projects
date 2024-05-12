const api_url ="https://api.quotable.io/random";
var quote = document.getElementsByTagName("blockquote")[0];
var author = document.getElementsByTagName("span")[0];
async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}

getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML, "Tweet window","width=600,height=300");
}


