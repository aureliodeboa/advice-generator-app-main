 let apiFunc = async ()=>{

    let response= await  fetch('http://api.quotable.io/random');
    let json= await response.json();
    adviceQuote.innerHTML = `❛❛ ${json.content} ❜❜`;
    adviceTitle.innerHTML = `Advice # ${Math.floor(Math.random()*1000)}`;
 }
 
 apiFunc();
 
   



let adviceQuote = document.querySelector('.advice-quote');
let button = document.querySelector('.advice-icon');
let adviceTitle= document.querySelector('.advice-title');
button.addEventListener('click',apiFunc);
