const title=document.querySelector("#title");

const CLICKED_CLASS="clicked"

function handleCilck(){
    const hasClass=title.classList.contains(CLICKED_CLASS);
//contain은 클래스안에 클래스이름 속성을 가지고 있는지 확인 할 수 있다.
//toggle이 아래의 내용을 해준다.
/*
if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
        //클래스네임이 아닌 클래스리스트를 쓰면 btn 클래스 이름이 남아잇는 상태로 변경된다.
    }
    console.log(currentClass)
} 
*/
title.classList.toggle(CLICKED_CLASS);    
}
function init(){ 
    title.addEventListener("mouseenter",handleCilck)
}

init();
