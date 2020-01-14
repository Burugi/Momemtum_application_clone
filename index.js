const title=document.querySelector("#title");//쿼리셀렉터는 처음으로 찾은 내용을 보여줌 아이디로 찾겠음
const title=document.querySelector(".title");//클래스로 찾겠음
title.innerHTML="Hi From JS";//이렇게 변경할 수 있음
title.style.color="red";
document.title="I own you note";
console.dir(title)//내가 title로 할 수 있는 것들
//Tag Name은 h1,h2같은 것을 의미한다.
