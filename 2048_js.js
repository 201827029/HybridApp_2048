//document.addEventListener('keydown', (event) => {
// console.log(event);
// });

var block = document.getElementsByClassName("num2");
var i = 0;

// 먼저 눌린 키를 수신할 이벤트 리스너 필요
document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
    if (e.key == 37 || e.key == "ArrowRight") {
        console.log(e);
        for (i = 0; i < block.length; i++) {
            block[i].style.marginLeft = 233 + "px";
        }
    }
    else if (e.key == 39 || e.key == "ArrowLeft") {
        console.log(e);
        for (i = 0; i < block.length; i++) {
            block[i].style.marginLeft = 0 + "px";
        }
    }
    else if (e.key == 38 || e.key == "ArrowUp") {
        console.log(e);
        for (i = 0; i < block.length; i++) {
            block[i].style.marginTop = 0 + "px";
        }
    }
    else if (e.key == 40 || e.key == "ArrowDown") {
        console.log(e);
        for (i = 0; i < block.length; i++) {
            block[i].style.marginTop = 233 + "px";
        }
    }
}