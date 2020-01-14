const body=document.querySelector("body")

const IMG_NUMBER=4;

function paintImage(imgNumber){
    const image=new Image();
    image.src=`images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}
function genRandom(){//랜덤을 어떻게 만드는가
    const number=Math.floor(Math.random()*IMG_NUMBER);//0-3의 랜덤함수
    return number;
}
function init(){
    const randomNumber=genRandom();
    paintImage(randomNumber)
}

init();