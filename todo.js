const toDoForm=document.querySelector(".js-toDoForm"),
    toDoInput=toDoForm.querySelector("input"),
    toDoList=document.querySelector(".js-toDoList");

const TODOS_LS='toDos';

let toDos=[];

function deleteToDo(event){
    const btn=event.target;//어떤 버튼을 선택했는지 알게됨
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos=toDos.filter(function(toDo){
        return toDo.id!==parseInt(li.id);
    });
    toDos=cleanToDos;
    saveToDos();
}//html에서만 삭제되고 로컬저장소에서는 삭제되지 않음

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));//객체를 스트링으로 강제저장
}

function paintToDo(text){
const li=document.createElement("li");//html에 만들고 싶을때
const delBtn=document.createElement("button");
delBtn.value="X";
delBtn.addEventListener("click",deleteToDo);
const span=document.createElement("span");
const newId=toDos.length+1;
span.innerText=text;
li.appendChild(span);//안의 부속폴더를 만드는것
li.appendChild(delBtn);
li.id=newId;
toDoList.appendChild(li);
const toDoObj={
    text: text,
    id:newId
};
toDos.push(toDoObj);
saveToDos();
}

function handlerSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos=localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null){       
        const parsedToDos=JSON.stringify.parse(loadedToDos);//parse는 오브젝트로 정리하는것
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })//parsed된 내용마다 함수를 적용시키는 것을 의미한다.
    }
}

function init(){
    toDoForm.addEventListener("submit",handlerSubmit)
}

init();