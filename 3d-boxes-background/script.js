const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

// classList 是访问元素的类列表的方法
// toggle() 方法从列表中删除一个给定的标记 并返回 false 。 如果标记 不存在，则添加并且函数返回 true。
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxesContainer.appendChild(box)
    }
  }
}

createBoxes()
