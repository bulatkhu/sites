const boxes = document.querySelectorAll('.block')

const boxesArr = []

for (let i = 0; i < boxes.length; i++) {
  boxesArr[i] = boxes[i]
  boxes[i].remove()
}

let step = 0
let offset = 0

function draw() {
  const boxSpace = document.querySelector('.box-slider')
  boxesArr[step].style.top = ''
  boxesArr[step + 1].style.top = '150px'
  boxSpace.appendChild(boxesArr[step])
  boxSpace.appendChild(boxesArr[step + 1])
}

document.onclick = draw

console.log(boxesArr)