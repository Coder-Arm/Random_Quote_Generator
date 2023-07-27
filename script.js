const quoteBox = document.getElementById('quote-box');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener("click",fetchData);

function renderData(data){
    while(quoteBox.firstChild) quoteBox.removeChild(quoteBox.firstChild);
    let randomIdx = Math.round(Math.random()*data.length);
    const content = document.createElement('div');
    content.className = "content";
    content.innerHTML = `<p class="quote">${data[randomIdx].content}</p>
    <span class="author">${data[randomIdx].author}</span>`;
    quoteBox.appendChild(content);
}

async function fetchData(){
    try{
    const response = await fetch('https://api.quotable.io/quotes/random?limit=50');
     const result = await response.json();
    //  console.log(result);
     renderData(result);
    }
    catch(error){
        console.log(error.message);
    }
}
fetchData();