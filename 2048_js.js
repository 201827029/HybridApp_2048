var cellArr = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]; // 배열 생성
var blocks = document.getElementsByClassName("backblock");
var score = document.getElementById("score");
var titlediv = document.getElementById("title");
var endtitlediv = document.getElementById("endtitle");
var gamaovertitle = document.getElementById("gameovertitle");

var Score = 0;
var startgame = 0;
var End = 0;
var startcheck = 0;
score.innerHTML = 0;
var x = false;

//이동 함수, 좌표 계산 함수 만들기
//clearinterval



function StartNum() {  //랜덤한 칸에 2 또는 4를

    var rows2 = parseInt(Math.random() * 4); //행
    var column2 = parseInt(Math.random() * 4); //열
    var rand2 = parseInt(Math.random() * 10); //랜덤 값

    if (cellArr[rows2][column2] == "") { //해당 배열에 값이 없으면
        if (rand2 >= -1 && rand2 <= 3) {
            cellArr[rows2][column2] = 4;
        } else if (rand2 >= 4 && rand2 <= 6) {
            cellArr[rows2][column2] = 2;
        } else if (rand2 >= 7 && rand2 <= 10) {
            cellArr[rows2][column2] = 4;
            rows2 = parseInt(Math.random() * 4); //행
            column2 = parseInt(Math.random() * 4); //열
            cellArr[rows2][column2] = 2;
        }
    }

    //2,4 값을 넣기 위해 [rows][column]를 0~15값으로 구하는 for
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var k = i * 4 + j;
            if (cellArr[i][j] != "") { // [rows][column] == i,j
                blocks[k].innerHTML = cellArr[i][j]; // [rows][column]에 들어간 값을 blocks[]안에 값을 넣는다 출력문
                blocks[k].id = 'num' + cellArr[i][j]; //값에 따라서 ID 값을 하여 해당 값을 이용해 배경색을 바꿈
            } else {
                blocks[k].innerHTML = "";
                blocks[k].removeAttribute('id');
            }
        }
    }
}

function CreateNum() {  //랜덤한 칸에 2 또는 4를
    End += 1;
    var rows = parseInt(Math.random() * 4); //행
    var column = parseInt(Math.random() * 4); //열
    var rand = parseInt(Math.random() * 10); //랜덤 값

    if (cellArr[rows][column] == "") { //해당 배열에 값이 없으면
        if (rand >= 0) { //rand 값이 0일 때 4를, 아니면 2를 cellArr배열에 넣는다
            cellArr[rows][column] = 2;
        }
    } else { //해당 배열에 값이 있으면 해당 함수를 빈 공간이 나올 때까지 실행
        CreateNum();
    }

    //2,4 값을 넣기 위해 [rows][column]를 0~15값으로 구하는 for
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var k = i * 4 + j;
            if (cellArr[i][j] != "") { // [rows][column] == i,j
                blocks[k].innerHTML = cellArr[i][j]; // [rows][column]에 들어간 값을 blocks[]안에 값을 넣는다 출력문
                blocks[k].id = 'num' + cellArr[i][j]; //값에 따라서 ID 값을 하여 해당 값을 이용해 배경색을 바꿈
            } else {
                blocks[k].innerHTML = "";
                blocks[k].removeAttribute('id');
            }
        }
    }
    

    // 점수가 2048일 경우
    for (let index = 0; index < 16; index++) { // div 15개를 전부 확인 후에
        if (blocks[index].innerHTML == 2048) { // 텍스트가 2048이 존재하는 경우
            endtitlediv.style.display = 'block'; // 게임 종료 DIV를 보이게 한다
        }
    }
}

// function gameovercheck() {
//     var x = false;
//     for (var i = 0; i < 16; i++) {
//         switch (i) {
//             case (0):
//                 if (blocks[0] == blocks[1] || blocks[0] == blocks[4]) {
//                     x = true;
//                 };
//                 break;
//             case (1):
//                 if (blocks[1] == blocks[0] || blocks[1] == blocks[2] || blocks[1] == blocks[5]) {
//                     x = true;
//                 };
//                 break;
//             case (2):
//                 if (blocks[2] == blocks[1] || blocks[2] == blocks[3] || blocks[2] == blocks[6]) {
//                     x = true;
//                 };
//                 break;
//             case (3):
//                 if (blocks[3] == blocks[2] || blocks[3] == blocks[7]) {
//                     x = true;
//                 };
//                 break;
//             case (4):
//                 if (blocks[4] == blocks[0] || blocks[4] == blocks[5] || blocks[4] == blocks[8]) {
//                     x = true;
//                 };
//                 break;
//             case (5):
//                 if (blocks[5] == blocks[1] || blocks[5] == blocks[4] || blocks[5] == blocks[6] || blocks[5] == blocks[9]) {
//                     x = true;
//                 };
//                 break;
//             case (6):
//                 if (blocks[6] == blocks[2] || blocks[6] == blocks[5] || blocks[6] == blocks[7] || blocks[6] == blocks[10]) {
//                     x = true;
//                 };
//                 break;
//             case (7):
//                 if (blocks[7] == blocks[3] || blocks[7] == blocks[6] || blocks[7] == blocks[11]) {
//                     x = true;
//                 };
//                 break;
//             case (8):
//                 if (blocks[8] == blocks[4] || blocks[8] == blocks[9] || blocks[8] == blocks[12]) {
//                     x = true;
//                 };
//                 break;
//             case (9):
//                 if (blocks[9] == blocks[5] || blocks[9] == blocks[8] || blocks[9] == blocks[10] || blocks[9] == blocks[13]) {
//                     x = true;
//                 };
//                 break;
//             case (10):
//                 if (blocks[10] == blocks[6] || blocks[10] == blocks[9] || blocks[10] == blocks[11] || blocks[10] == blocks[14]) {
//                     x = true;
//                 };
//                 break;
//             case (11):
//                 if (blocks[11] == blocks[7] || blocks[11] == blocks[10] || blocks[11] == blocks[15]) {
//                     x = true;
//                 }; 
//                 break;
//             case (12):
//                 if (blocks[12] == blocks[8] || blocks[12] == blocks[13]) {
//                     x = true;
//                 };
//                 break;
//             case (13):
//                 if (blocks[13] == blocks[9] || blocks[13] == blocks[12] || blocks[13] == blocks[14]) {
//                     x = true;
//                 };
//                 break;
//             case (14):
//                 if (blocks[14] == blocks[10] || blocks[14] == blocks[13] || blocks[14] == blocks[15]) {
//                     x = true;
//                 };
//                 break;
//             case (15):
//                 if (blocks[15] == blocks[11] || blocks[15] == blocks[14]) {
//                     x = true;
//                 };
//                 break;
//         }
//         if (blocks[i] == "") {
//             x = true;
//             break;
//         }
        
//     }
//     if (x) {
//         console.log(x);
//         gameover();
//     }
// }

function gameovercheck(){ //합칠 수 있는 수가 없거나, 칸이 다 차있으면 게임 오버
    for(var i=0;i<4;i++){
        var colCheck = cellArr[i][0];
        if(colCheck==0) return;
        for(var j=1;j<4;j++){
            if(cellArr[i][j]==colCheck || cellArr[i][j]==0) return;
            else colCheck = cellArr[i][j];
        }
    }
    for(var i=0;i<4;i++){
        var rowCheck = cellArr[0][i];
        if(rowCheck==0) return;
        for(var j=1;j<4;j++){
            if(cellArr[j][i]==rowCheck || cellArr[j][i]==0) return;
            else rowCheck = cellArr[j][i];
        }
    }
    gameover();
}


function Left() {
    var moved = false;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (cellArr[i][j] != "") { //cellArr값이 존재하면
                for (var k = j - 1; k >= 0; k--) {
                    if (cellArr[i][k] != "") { //[i][j]의 -1 인 ik에 값이 있으면
                        if (cellArr[i][k] == cellArr[i][k + 1]) { // [i][j]값과 [i][k]값이 같으면
                            cellArr[i][k] = cellArr[i][k] * 2; // 해당 수를 X2 한 후에
                            cellArr[i][k + 1] = ""; //[i][j]값은 빈 공간으로 만든다
                            moved = true;
                            break;
                        } else { // 값이 서로 다르면
                            break;
                        }
                    } else { // 옆 칸에 값이 없으면
                        cellArr[i][k] = cellArr[i][k + 1];
                        cellArr[i][k + 1] = "";
                        moved = true;
                    }
                }
            }
        }
    }
    if(moved){
    	CreateNum();
    } else {
    	gameovercheck();
    }
}

function Right() { //Left의 반대, 등호만 대부분 바꿔주면 됨
    var moved = false;
    for (var i = 0; i < 4; i++) {
        for (var j = 3; j >= 0; j--) { //오른쪽이므로 3열 부터 값이 있는지 확인
            if (cellArr[i][j] != "") {
                for (var k = j + 1; k <= 3; k++) {
                    if (cellArr[i][k] != "") { //[i][j]의 -1 인 ik에 값이 있으면
                        if (cellArr[i][k] == cellArr[i][k - 1]) { // [i][j]값과 [i][k]값이 같으면
                            cellArr[i][k] = cellArr[i][k] * 2; // 해당 수를 X2 한 후에
                            cellArr[i][k - 1] = ""; //[i][j]값은 빈 공간으로 만든다
                            moved = true;
                            break;
                        } else { // 값이 서로 다르면
                            break;
                        }
                    } else {
                        cellArr[i][k] = cellArr[i][k - 1];
                        cellArr[i][k - 1] = "";
                        moved = true;
                    }
                }
            }
        }
    }
    if(moved){
    	CreateNum();
    } else {
    	gameovercheck();
    }
}

function Up() {
    var moved = false;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) { //Left함수와 동일
            if (cellArr[j][i] != "") { //cellArr값이 존재하면
                for (var k = j - 1; k >= 0; k--) {
                    if (cellArr[k][i] != "") {
                        if (cellArr[k][i] == cellArr[k + 1][i]) {
                            cellArr[k][i] = cellArr[k][i] * 2;
                            cellArr[k + 1][i] = "";
                            moved = true;
                            break;
                        } else { // 값이 서로 다르면;
                            break;
                        }
                    } else {
                        cellArr[k][i] = cellArr[k + 1][i];
                        cellArr[k + 1][i] = "";
                        moved = true;
                    }
                }
            }
        }
    }
    if(moved){
    	CreateNum();
    } else {
    	gameovercheck();
    }
}

function Down() {
    var moved = false;
    for (var i = 0; i < 4; i++) {
        for (var j = 3; j >= 0; j--) { //Right함수와 동일 3부터 값이 있는지 확인
            if (cellArr[j][i] != "") {
                for (var k = j + 1; k <= 3; k++) {
                    if (cellArr[k][i] != "") {
                        if (cellArr[k][i] == cellArr[k - 1][i]) {
                            cellArr[k][i] = cellArr[k][i] * 2;
                            cellArr[k - 1][i] = "";
                            moved = true;
                            break;
                        } else { // 값이 서로 다르면
                            break;
                        }
                    } else {
                        cellArr[k][i] = cellArr[k - 1][i];
                        cellArr[k - 1][i] = "";
                        moved = true;
                    }
                }
            }
        }
    }
    if(moved){
    	CreateNum();
    } else {
    	gameovercheck();
    }
}

function Conti() {
    endtitlediv.style.display = 'none';
}

function gameover() {
    gamaovertitle.style.display = 'block';
}

function keylog(e) {
    console.log(e.key);
    switch (e.key) {
        case 'Enter':
            if (startgame == 0) {
                StartNum();
                startcheck = 1;
                titlediv.remove();
                startgame = 1;
            }
            break;
        case 'ArrowRight':
            if (startcheck == 1) {
                gameovercheck();
                Right();
                Score += 1;
                score.innerHTML = Score;
            }
            break;
        case 'ArrowLeft':
            if (startcheck == 1) {
                gameovercheck();
                Left();
                Score += 1;
                score.innerHTML = Score;
            }
            break;
        case 'ArrowUp':
            if (startcheck == 1) {
                gameovercheck();
                Up();
                Score += 1;
                score.innerHTML = Score;
            }
            break;
        case 'ArrowDown':
            if (startcheck == 1) {
                gameovercheck();
                Down();
                Score += 1;
                score.innerHTML = Score;
            }
            break;
        case 'c':
            Conti();
            break;
        default:
            break;
    }
}

window.onkeydown = keylog;
