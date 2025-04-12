const boxes = document.querySelectorAll('section > div');
const colorList = ['#FFCDD2', '#EF9A9A', '#E57373', '#EF5350'];
let isRunning = false;

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

startBtn.addEventListener('click', animationStart);
stopBtn.addEventListener('click', animationStop);

function animationStart() {
    if (isRunning) return;
    isRunning = true;

    let currentRedBox = 4;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor === '#E53935') {
            currentRedBox = i;
            break;
        }
    }

    for (let i = 0; i < 4; i++) {
        boxes[i].style.backgroundColor = colorList[i];
    }

    let nextBox = currentRedBox;
    looping(nextBox);
}


function animationStop() {
    console.log("stop");
    isRunning = false;
}


async function looping(nextBox) {
    while (isRunning) {
        nextBox++;

        if (nextBox < boxes.length) {
            boxes[nextBox].style.backgroundColor = '#E53935';

            let x = 3;
            let y = nextBox;
            for (let i = nextBox - 1; i >= nextBox - 4; i--) {
                if (i >= 0) {
                    boxes[i].style.backgroundColor = colorList[x];
                    x--;
                    y = i;
                }
            }

            if (y - 1 >= 0) {
                boxes[y - 1].style.backgroundColor = '#FFFFFF';
            }

        } else {
            let curentRedBox = 9;

            while (isRunning) {
                curentRedBox--;

                if (curentRedBox >= 0) {
                    boxes[curentRedBox].style.backgroundColor = '#E53935';

                    let x = 3;
                    let a = curentRedBox;
                    for (let i = curentRedBox + 1; i < curentRedBox + 5; i++) {
                        if (i < boxes.length) {
                            boxes[i].style.backgroundColor = colorList[x];
                            x--;
                            a = i;
                        }
                    }

                    if (a + 1 < boxes.length) {
                        boxes[a + 1].style.backgroundColor = '#FFFFFF';
                    }
                } else {
                    nextBox = 3;
                    break;
                }

                await delay(100);
            }
        }

        await delay(100);
    }
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}