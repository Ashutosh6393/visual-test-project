let clutter = '';
let timer = 60;
let score = 0;
let hit = 0;



function createBubble(){
    for (let i = 0; i < 112; i++) {
        let num = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${num}</div>`
    }
    document.querySelector('.panbtm').innerHTML = clutter;
}

function runTimer(){

    let timerInt = setInterval(function(){
        if(timer>=0){
            document.getElementById('timerValue').innerText = timer;
            timer--;
        }else{
            clearInterval(timerInt);
            document.querySelector('.panbtm').innerHTML = `<h1> Game Over! Your Score is ${score} </h1>
            <button class='btn'>Restart</button>`
            document.querySelector('.btn').addEventListener('click', function(){
    location.reload();
})
        }
    },1000)

}

function getNewHit(){
    hit = Math.floor(Math.random()*10);
    document.getElementById('hitValue').innerText = hit;
}

function bubbleClickHandler(event){  
    let clickedValue = Number(event.target.innerText);
    if(clickedValue === hit){
        score += 10;
        clutter = '';
        createBubble();
        getNewHit();
    }  
    document.getElementById('scoreValue').innerText = score;
}

document.querySelector('.panbtm').addEventListener('click', bubbleClickHandler)

createBubble();
runTimer();
getNewHit();


