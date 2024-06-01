let button=document.querySelectorAll(".butt");
let reset=document.querySelector("#reset");
let turn=true;
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let msgcont=document.querySelector(".msg-container");
let x=msgcont.getAttribute("class");
let p=document.querySelector("p");
let newgame=document.querySelector("#newgame");
let count=0;
const draw=()=>{
    p.innerText="DRAW";
    msgcont.classList.remove("hide");
    turn=true;
}
const resetgame=()=>{
    for(let but of button){
        but.disabled=false;
        but.innerText="";
        msgcont.classList.add("hide");
    }
    turn=true;
    count=0;
}
const showwinner=(winner)=>{
    p.innerText=`GAME OVER PLAYER ${winner} WON`;
    for(let but of button){
        but.disabled=true;
    }
    msgcont.classList.remove("hide");
}
const check=()=>{
    for(let val of win){
        let p1=button[val[0]].innerText;
        let p2=button[val[1]].innerText;
        let p3=button[val[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p1==p3){
                showwinner(p1);
            }
        }
    }
}

button.forEach((buts)=>{
    buts.onclick=()=>{
        if(turn){
            buts.innerText="x";
            turn=false;
        }
        else{
            buts.innerText="o";
            turn=true; 
        }
        count+=1;
        buts.disabled=true;
        if(count==9){
            draw();
        }
        check();
    }
})
reset.onclick=()=>{
    resetgame();
}
newgame.onclick=()=>{
    resetgame();
}