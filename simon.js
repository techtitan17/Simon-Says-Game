// ROADMAP:
// 1) HOW TO GAME  WILL START
// 2)HOW TO GAME LEVEL-UP AND BTN FLASHES;
//3)now add event listener for buttons;



let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");


document.addEventListener("keypress",function() {  //HOW TO GAME START
    if (started==false){
    console.log("game is started")
    started=true;
    levelup();
    }
});


//HOW TO GAME LEVEL-UP AND BTN FLASHES;
function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout( function ()  {
        btn.classList.remove("flash");
    }, 250);
    };

    function userflash(btn){
        btn.classList.add("userflash");
        setTimeout(() => {
            btn.classList.remove("userflash");
        }, 250)};

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkans(idx){
    // console.log("current level:", level)
    // let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }}else{
            h2.innerHTML=`Game over ! Your score was <b> ${level} </b> <br> Press any key to start.`;
            document.querySelector("body").style.backgroundcolor = "red";
            setTimeout(function() {
                document.querySelector("body").style.backgroundcolor = "white";
            },150);
            reset();
        }
    

}
function btnpress(){
    let btn=this;
    userflash(btn);
     usercolor=btn.getAttribute("id");
//      console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length-1);
 }

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click" ,btnpress)
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}