const boxes = document.querySelectorAll('.block')
const spaceOfSlider = document.querySelector('.box-slider')

const boxArr = []

for(let i = 0; i < boxes.length; i++) {
  boxArr[i] = boxes[i]
  boxes[i].remove()
}

spaceOfSlider.appendChild(boxArr[0])
boxArr[1].style.top = '150px'
spaceOfSlider.appendChild(boxArr[1])

let step = 0
let offset = 0

function click() {
  const blocks = document.querySelectorAll('.block')
  console.log(blocks[0], blocks[1])
  blocks[step].style.top = '-150px'
  blocks[step + 1].style.top = 0
  setTimeout(() => {
    blocks[step].remove()
    spaceOfSlider.appendChild(boxArr[step + 2])
    boxArr[step + 2].style.top = '150px'
    step++
  },1000)
}

document.onclick = click