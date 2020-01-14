const clockContatiner=document.querySelector(".js-clock")
    ,clockTitle=clockContatiner.querySelector("h1");
function getTime(){
    const date=new Date();
    const minutes=date.getMinutes();
    const hours=date.getHours(); //console에서 해보는 것을 추천
    const seconds=date.getSeconds();
    clockTitle.innerText=`${
        hours<10?`0${hours}`:hours
    }:${minutes<10?`0${minutes}`:minutes}:${
        seconds<10?`0${seconds}`:seconds
    }`;//작은 if ===삼항 연산자.
}
    function init(){
        getTime();
        setInterval(getTime,1000);//단위가 밀리세컨드이므로 1000이다.
    }

init();
