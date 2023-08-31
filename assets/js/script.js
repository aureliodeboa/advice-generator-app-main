 let apiFunc = async ()=>{

    let response= await  fetch('https://api.adviceslip.com/advice');
    let json= await response.json();
    adviceQuote.innerHTML = `❛❛ ${json.slip.advice} ❜❜`;
    adviceTitle.innerHTML = `Advice # ${json.slip.id}`;
 }
 
 apiFunc();
 
   



let adviceQuote = document.querySelector('.advice-quote');
let button = document.querySelector('.advice-icon');
let adviceTitle= document.querySelector('.advice-title');
button.addEventListener('click',apiFunc);
