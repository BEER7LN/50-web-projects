const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// 当用户开始拖动一个元素或者一个选择文本的时候 dragstart 事件就会触发
fill.addEventListener('dragstart', dragStart)
// 拖放事件在拖放操作结束时触发 (通过释放鼠标按钮或单击 escape 键)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    // 当元素或者选择的文本被拖拽到一个有效的放置目标上时，触发 dragover 事件，（每几百毫秒触发一次）
    empty.addEventListener('dragover', dragOver)
    // 当拖动的元素或被选择的文本进入有效的放置目标时， dragenter 事件被触发。
    empty.addEventListener('dragenter', dragEnter)
    // 当一个被拖动的元素或者被选择的文本离开一个有效的拖放目标时，将会触发dragleave 事件
    empty.addEventListener('dragleave', dragLeave)
    // 当一个元素或是选中的文字被拖拽释放到一个有效的释放目标位置时，drop 事件被抛出
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
  // preventDefault()： 如果此事件没有被显式处理，它默认的动作也不应该照常执行。此事件还是继续传播，除非碰到事件侦听器调用stopPropagation() 或stopImmediatePropagation()，才停止传播
    e.preventDefault()
}

// 此处为+=
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

// 此处为=
function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}