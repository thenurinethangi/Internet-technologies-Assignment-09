const $boxes = $('section > div');
const colorList = ['#FFCDD2', '#EF9A9A', '#E57373', '#EF5350'];
let isRunning = false;

const $startBtn = $('#start-btn');
const $stopBtn = $('#stop-btn');

$startBtn.on('click', animationStart);
$stopBtn.on('click', animationStop);

function animationStart() {
    if (isRunning) return;
    isRunning = true;

    let currentRedBox = 4;

    $boxes.each(function(i) {
        if ($(this).css('background-color') === 'rgb(229, 57, 53)') {
            currentRedBox = i;
            return false;
        }
    });

    for (let i = 0; i < 4; i++) {
        $boxes.eq(i).css('background-color', colorList[i]);
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

        if (nextBox < $boxes.length) {
            $boxes.eq(nextBox).css('background-color', '#E53935');

            let x = 3;
            let y = nextBox;
            for (let i = nextBox - 1; i >= nextBox - 4; i--) {
                if (i >= 0) {
                    $boxes.eq(i).css('background-color', colorList[x]);
                    x--;
                    y = i;
                }
            }

            if (y - 1 >= 0) {
                $boxes.eq(y - 1).css('background-color', '#FFFFFF');
            }

        } else {
            let curentRedBox = 9;

            while (isRunning) {
                curentRedBox--;

                if (curentRedBox >= 0) {
                    $boxes.eq(curentRedBox).css('background-color', '#E53935');

                    let x = 3;
                    let a = curentRedBox;
                    for (let i = curentRedBox + 1; i < curentRedBox + 5; i++) {
                        if (i < $boxes.length) {
                            $boxes.eq(i).css('background-color', colorList[x]);
                            x--;
                            a = i;
                        }
                    }

                    if (a + 1 < $boxes.length) {
                        $boxes.eq(a + 1).css('background-color', '#FFFFFF');
                    }
                } else {
                    nextBox = 3;
                    break;
                }

                await delay(70);
            }
        }

        await delay(70);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
