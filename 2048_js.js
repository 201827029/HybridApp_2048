var cellArr = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]; // 배열 생성
var blocks = document.getElementsByClassName("backblock");

function CreateNum() {  //랜덤한 칸에 2 또는 4를

    var rows = parseInt(Math.random() * 4); //행
    var column = parseInt(Math.random() * 4); //열
    var rand = parseInt(Math.random() * 10); //랜덤 값

    if (cellArr[rows][column] == "") { //해당 배열에 값이 없으면
        if (rand == 0) { //rand 값이 0일 때 4를, 아니면 2를 cellArr배열에 넣는다
            cellArr[rows][column] = 4;
        } else {
            cellArr[rows][column] = 2;
        }

        //2,4 값을 넣기 위해 [rows][column]를 0~15값으로 구하는 for
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var k = i * 4 + j;
                if (cellArr[i][j] != "") { // [rows][column] == i,j
                    blocks[k].innerHTML = cellArr[i][j]; // [rows][column]에 들어간 값을 blocks[]안에 값을 넣는다
                } else {
                    blocks[k].innerHTML = "";
                }
            }
        }
    } else { //해당 배열에 값이 있으면 해당 함수를 빈 공간이 나올 때까지 실행
        CreateNum();
    }

    console.log(rows);
    console.log(column);
}

// function Left() {
//     for (var i = 0; i < 4; i++) {
//         for (var j = 0; j < 4; j++) {
//             if (cellArr[i][j] != "") { //cellArr값이 존재하면
//                 if (cellArr[i][j - 1] != "") { //[i][j]의 -1인 왼쪽에 값이 있으면
//                     if (cellArr[i][j - 1] == cellArr[i][j]) { //[i][j-1]과 [i][j] 값이 같으면
//                         cellArr[i][j - 1] = cellArr[i][j] * 2; // 해당 수를 X2
//                         cellArr[i][j] = ""; //해당 자리는 빈 공간으로
//                         break;//이거 안 쓰면 2222에서 바로 8됨
//                     } else {
//                         break;//값이 다르면 바로 빠져나와 이동이 되지 않게
//                     }
//                 } else { ////[i][j]의 -1인 왼쪽에 값이 없으면
//                     cellArr[i][j - 1] = cellArr[i][j];
//                     cellArr[i][j] = "";
//                 }
//             }
//         }
//     }
//     CreateNum();
// }

function Left() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (cellArr[i][j] != "") { //cellArr값이 존재하면
                for (var k = j - 1; k >= 0; k--) {
                    if (cellArr[i][k] != "") { //[i][j]의 -1 인 ik에 값이 있으면
                        if (cellArr[i][k] == cellArr[i][k + 1]) { // [i][j]값과 [i][k]값이 같으면
                            cellArr[i][k] = cellArr[i][k] * 2; // 해당 수를 X2 한 후에
                            cellArr[i][k + 1] = ""; //[i][j]값은 빈 공간으로 만든다
                            break; // 이거 안 쓰면 2222에서 바로 8 됨
                        } else { // 값이 서로 다르면
                            break;
                        }
                    } else {
                        cellArr[i][k] = cellArr[i][k + 1];
                        cellArr[i][k + 1] = "";
                    }
                }
            }
        }
    }
    CreateNum();
}

function Right() { //Left의 반대, 등호만 대부분 바꿔주면 됨
    for (var i = 0; i < 4; i++) {
        for (var j = 3; j >= 0; j--) { //오른쪽이므로 3열 부터 값이 있는지 확인
            if (cellArr[i][j] != "") {
                for (var k = j + 1; k <= 3; k++) {
                    if (cellArr[i][k] != "") { //[i][j]의 -1 인 ik에 값이 있으면
                        if (cellArr[i][k] == cellArr[i][k - 1]) { // [i][j]값과 [i][k]값이 같으면
                            cellArr[i][k] = cellArr[i][k] * 2; // 해당 수를 X2 한 후에
                            cellArr[i][k - 1] = ""; //[i][j]값은 빈 공간으로 만든다
                            break; // 이거 안 쓰면 2222에서 바로 8 됨
                        } else { // 값이 서로 다르면
                            break;
                        }
                    } else {
                        cellArr[i][k] = cellArr[i][k - 1];
                        cellArr[i][k - 1] = "";
                    }
                }
            }
        }
    }
    CreateNum();
}

function Up() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) { //Left함수와 동일
            if (cellArr[j][i] != "") { //cellArr값이 존재하면
                for (var k = j - 1; k >= 0; k--) {
                    if (cellArr[k][i] != "") {
                        if (cellArr[k][i] == cellArr[k + 1][i]) { 
                            cellArr[k][i] = cellArr[k][i] * 2;
                            cellArr[k + 1][i] = "";
                            break; // 이거 안 쓰면 2222에서 바로 8 됨
                        } else { // 값이 서로 다르면
                            break;
                        }
                    } else {
                        cellArr[k][i] = cellArr[k + 1][i];
                        cellArr[k + 1][i] = "";
                    }
                }
            }
        }
    }
    CreateNum();
}

function Down() {
    for (var i = 0; i < 4; i++) {
        for (var j = 3; j >= 0; j--) { //Right함수와 동일 3부터 값이 있는지 확인
            if (cellArr[j][i] != "") {
                for (var k = j + 1; k <= 3; k++) {
                    if (cellArr[k][i] != "") {
                        if (cellArr[k][i] == cellArr[k - 1][i]) {
                            cellArr[k][i] = cellArr[k][i] * 2;
                            cellArr[k - 1][i] = "";
                            break; // 이거 안 쓰면 2222에서 바로 8 됨
                        } else { // 값이 서로 다르면
                            break;
                        }
                    } else {
                        cellArr[k][i] = cellArr[k - 1][i];
                        cellArr[k - 1][i] = "";
                    }
                }
            }
        }
    }
    CreateNum();
}

var startgame = 0;
function keylog(e) {
    console.log(e.key);
    switch (e.key) {
        case 'Enter':
            if (startgame == 0) {
                CreateNum();
                CreateNum();
                startgame = 1;
            }
            break;
        case 'ArrowRight':
            Right();
            break;
        case 'ArrowLeft':
            Left();
            break;
        case 'ArrowUp':
            Up();
            break;
        case 'ArrowDown':
            Down();
            break;
        default:
            break;
    }
}
window.onkeydown = keylog;

