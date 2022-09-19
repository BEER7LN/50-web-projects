const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    // innerHeight：浏览器窗口的视口（viewport）高度
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
      // Element.getBoundingClientRect() 方法返回一个 DOMRect 对象，其提供了元素的大小及其相对于视口的位置
      const boxTop = box.getBoundingClientRect().top

      if(boxTop < triggerBottom) {
          box.classList.add('show')
      } else {
          box.classList.remove('show')
      }
    })
}