const title=document.querySelector("#title");//쿼리셀렉터는 처음으로 찾은 내용을 보여줌 아이디로 찾겠음

function handleResize(event){
    console.log(event)
};
function handleClick(event){
    title.style.color="red";
}//한번만 클릭을 의미한다.
title.addEventListener("click",handleClick);
//여기서 handleResize()를 하면 바로 함수를 호출하는게 되므로 함수이름만 적기
