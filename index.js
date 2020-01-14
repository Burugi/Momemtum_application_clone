const title=document.querySelector("#title");

const BASE_COLOR ="red";
const OHTER_COLOR="#2980b9";

function handleCilck(){
   const currentColor = title.style.color;
   if(currentColor===BASE_COLOR){
       title.style.color=OHTER_COLOR;
   }else{
       title.style.color=BASE_COLOR;
   }
}

function init(){
    title.style.color=BASE_COLOR;
    title.addEventListener("mouseenter",handleCilck)
}
init();
