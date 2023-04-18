/*const btn = document.querySelector(`#soundButton`);
const audio = document.querySelector(`#player`)

btn.addEventListener ('click', function () {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
        
    });


const timer = 1;
let amountTime = timer*60;

function calculateTime(){

    const countdownOne = document.querySelector(`#countdownOne`);

    let minutes = Math.floor (amountTime/60);
    let seconds = amountTime%60;

    if ( seconds<10){seconds = "0"+seconds}

    countdownOne.textContent = `${minutes}:${seconds}`;
    amountTime--;

    if (amountTime<0) {
        stopTimer();
        amountTime = 0;
        startCountTwo();
    }
    
    function stopTimer(){
        clearInterval(timerId);
    } 
    function startCountTwo(){
        
    
        const timer = 1;
    let amountTime = timer*60;
    
    function calculateTime(){
    
        const countdownTwo= document.querySelector(`#countdownTwo`);
    
        let minutes = Math.floor (amountTime/60);
        let seconds = amountTime%60;
    
        if ( seconds<10){seconds = "0"+seconds}
    
        countdownTwo.textContent = `${minutes}:${seconds}`;
        amountTime--;
    
        if (amountTime<0) {
            stopTimer();
            amountTime = 0;
            startCountThree();
        }
        
        function stopTimer(){
            clearInterval(timerId);
        } 
    
    }

let timerId = setInterval(calculateTime,1000); 

}}
    
let timerId = setInterval(calculateTime,1000);


function  startCountThree(){
    const timer = 1;
    let amountTime = timer*60;
    
    function calculateTime(){
    
        const countdownThree= document.querySelector(`#countdownThree`);
    
        let minutes = Math.floor (amountTime/60);
        let seconds = amountTime%60;
    
        if ( seconds<10){seconds = "0"+seconds}
    
        countdownThree.textContent = `${minutes}:${seconds}`;
        amountTime--;
    
        if (amountTime<0) {
            stopTimer();
            amountTime = 0;
            startCountFour();
        }
        
        function stopTimer(){
            clearInterval(timerId);
        } 
    
    }

let timerId = setInterval(calculateTime,1000); 
}

function  startCountFour(){
    const timer = 1;
    let amountTime = timer*60;
    
    function calculateTime(){
    
        const countdownFour= document.querySelector(`#countdownFour`);
    
        let minutes = Math.floor (amountTime/60);
        let seconds = amountTime%60;
    
        if ( seconds<10){seconds = "0"+seconds}
    
        countdownFour.textContent = `${minutes}:${seconds}`;
        amountTime--;
    
        if (amountTime<0) {
            stopTimer();
            amountTime = 0;
            
        }
        
        function stopTimer(){
            clearInterval(timerId);
        } 
    
    }

let timerId = setInterval(calculateTime,1000); 
}*/

const btn = document.querySelector(`#soundButton`);
const audio = document.querySelector(`#player`)

btn.addEventListener (`click`, function () {


    if (audio.paused) {
        audio.play();
      btn.textContent = "Stop Music";
      btn.classList.toggle (`pause`);
        

        
    }
    else {
        audio.pause();
     
        btn.textContent = "Play Music";
      btn.classList.toggle (`play`);
    }

});




let timerID;

const buttonPlay = document.querySelector('#workout'); 
buttonPlay.addEventListener("click", function() {
    timerID = setInterval(timerS, 1000);
})


const timer = 1;
let amountTime = timer * 60;

function timerS() {
    const countdown = document.querySelector('#countdownOne');
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if(amountTime < 0) {
        stopTimer();
       amountTime = 0;
       startCountTwo();
    }
}
function stopTimer() {
    clearInterval(timerID);
 }

function startCountTwo(){
        
    
    const timer = 1;
    let amountTime = timer*60;

    function calculateTime(){
    
        const countdownTwo= document.querySelector(`#countdownTwo`);
    
        let minutes = Math.floor (amountTime/60);
        let seconds = amountTime%60;
    
        if ( seconds<10){seconds = "0"+seconds}
    
        countdownTwo.textContent = `${minutes}:${seconds}`;
        amountTime--;
    
        if (amountTime<0) {
            stopTimer();
            amountTime = 0;
            startCountThree();
        }
        
        function stopTimer(){
            clearInterval(timerID);
        } 
    
    }

let timerID = setInterval(calculateTime,1000); 
}
function startCountThree(){
        
    
    const timer = 1;
    let amountTime = timer*60;

    function calculateTime(){
    
        const countdownThree= document.querySelector(`#countdownThree`);
    
        let minutes = Math.floor (amountTime/60);
        let seconds = amountTime%60;
    
        if ( seconds<10){seconds = "0"+seconds}
    
        countdownThree.textContent = `${minutes}:${seconds}`;
        amountTime--;
    
        if (amountTime<0) {
            stopTimer();
            amountTime = 0;
            startCountFour();
        }
        
        function stopTimer(){
            clearInterval(timerID);
        } 
    
    }

let timerID = setInterval(calculateTime,1000); 
}

function startCountFour(){
        
    
    const timer = 1;
    let amountTime = timer*60;

    function calculateTime(){
    
        const countdownFour= document.querySelector(`#countdownFour`);
    
        let minutes = Math.floor (amountTime/60);
        let seconds = amountTime%60;
    
        if ( seconds<10){seconds = "0"+seconds}
    
        countdownFour.textContent = `${minutes}:${seconds}`;
        amountTime--;
    
        if (amountTime<0) {
            stopTimer();
            amountTime = 0;
            startCountThree();
        }
        
        function stopTimer(){
            clearInterval(timerID);
        } 
    
    }

let timerID = setInterval(calculateTime,1000); 
}


