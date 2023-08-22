let color = document.querySelector('.color')
let score = document.querySelector('.span')
let buttons = document.querySelectorAll('.button')
let arrowcolors = ['red', 'green', 'yellow', 'blue']
let red = document.querySelector('.box1')
let green = document.querySelector('.box2')
let blue = document.querySelector('.box3')
let yellow = document.querySelector('.box4')
let counter = 0
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        let colors = window.getComputedStyle(e.target).backgroundColor
        if (colors === 'rgb(255, 0, 0)') {
            if (color.innerHTML === 'red') {
                score.innerHTML = ++counter
                randombtn()
            } else {
                score.innerHTML = --counter
                randombtn()
            }
        } else if (colors === 'rgb(0, 128, 0)') {
            if (color.innerHTML === 'green') {
                score.innerHTML = ++counter
                randombtn()
            } else {
                score.innerHTML = --counter
                randombtn()
            }
        } else if (colors === 'rgb(0, 0, 255)') {
            if (color.innerHTML === 'blue') {
                score.innerHTML = ++counter
                randombtn()
            } else {
                score.innerHTML = --counter
                randombtn()
            }
        } else if (colors === 'rgb(255, 255, 0)') {
            if (color.innerHTML === 'yellow') {
                score.innerHTML = ++counter
                randombtn()
            } else {
                score.innerHTML = --counter
                randombtn()
            }
        }
        // switch (colors) {
        //     case 'rgb(255, 0, 0)':
        //         if (color.innerHTML === 'red') {
        //             score.innerHTML = ++counter
        //             randombtn()
        //         } else {
        //             score.innerHTML = --counter
        //             randombtn()
        //         }
        //         break;
        //     case 'rgb(0, 128, 0)':
        //         if (color.innerHTML === 'green') {
        //             score.innerHTML = ++counter
        //             randombtn()
        //         } else {
        //             score.innerHTML = --counter
        //             randombtn()
        //         }
        //     case 'rgb(0, 0, 255)':
        //         if (color.innerHTML === 'blue') {
        //             score.innerHTML = ++counter
        //             randombtn()
        //         } else {
        //             score.innerHTML = --counter
        //             randombtn()
        //         }
        //     case 'rgb(255, 255, 0)':
        //         if (color.innerHTML === 'yellow') {
        //             score.innerHTML = ++counter
        //             randombtn()
        //         } else {
        //             score.innerHTML = --counter
        //             randombtn()
        //         }
        //         default:
        //             break
        
        // }
        console.log(colors);
    })
}






let start = document.querySelector('.startGame')
function randombtn() {
    // let randomcolor = Math.floor
    let random = Math.floor(Math.random() * arrowcolors.length)
    color.innerHTML = arrowcolors[random]
}

start.addEventListener('click', () => {
    randombtn()
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false
    }
})

