let text="X";
let boxes=document.querySelectorAll("#box");
let reseted=document.querySelectorAll("#reset");
let winner=document.querySelectorAll("#winner");
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(text==="X"){
       box.innerText=text;
        text="O";
    }
    else{
       box.innerText=text;
        text="X";
    }
    box.disabled=true;
    console.log("box was clicked")
    checkwinner();
});
});
let winpatt=[[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];
const checkwinner=()=>{
    for (let pattern of winpatt){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                disabled(box);
                reset.innerHTML="New game";
                if(text==="X"){
                    text="O";
                }
                else if(text==="O"){
                    text="X";
                }
                document.getElementById("winner").style.display="block";
                document.getElementById("winner").innerText="Congratulation !!🎉🎉"+text+" won the game 🎊";
            }
        }
    }
    };
const disabled=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
     })    
}
const enabled=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
     })    
}

reset.addEventListener("click",()=>{ 
    boxes.forEach((box)=>{
        box.innerText="";
        document.getElementById("winner").style.display="none";
        enabled();
     })    
});


