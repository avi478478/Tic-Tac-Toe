let boxes=document.querySelectorAll('.box');
let win=document.querySelector('.msg-container');
let winmsg=document.querySelector('.msg');
let rstbtn=document.querySelector('.rst-btn');
let newbtn=document.querySelector('.new-btn');
let turn0=true;

boxes.forEach((box) => {
   box.addEventListener("click",()=>{
        if(turn0){
        box.innerHTML='<p style="color:#5F1A37;">O</p>';
        turn0=false;
        }
        else{
        box.innerHTML='<p style="color:#34312D;">X</p>';
        turn0=true;
        }
        box.disabled=true;
        checkWin();
   }); 
});

let winners=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetgame=()=>{
   turn0=true;
   enableboxes();
   win.classList.add("hide");
}


const enableboxes=()=>{
   for(const box of boxes){
      box.disabled=false;
      box.innerText="";
   }
   
}

const disableboxes=()=>{
   for(let box of boxes){
      box.disabled=true;
   }
}
const display=(pos1val)=>{
   winmsg.innerText=`Congratulations, the winner is ${pos1val}`;
   win.classList.remove("hide");
   disableboxes();
}
let checkWin=()=>{
    for(const pattern of winners){
      
         let pos1val=boxes[pattern[0]].innerText;
         let pos2val=boxes[pattern[1]].innerText;
         let pos3val=boxes[pattern[2]].innerText;
         if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
               console.log('winner');
               display(pos1val);
            }
         }
    }
}

rstbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);