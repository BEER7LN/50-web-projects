const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

// getContext() 方法返回canvas 的上下文，如果上下文没有定义则返回 null
// "2d", 建立一个 CanvasRenderingContext2D 二维渲染上下文
const ctx = canvas.getContext('2d');

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y

// 在画布内监听，避免画布外“作画”
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    // offsetX 规定了事件对象与目标节点的内填充边（padding edge）在 X 轴方向上的偏移量
    x = e.offsetX
    y = e.offsetY
})

// 此处对整体进行了mouseup的监听，是因为可能在画布外松开鼠标
document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

// 鼠标isPressed的状态下进行绘画
canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

// 每个笔触都是一个点
function drawCircle(x, y) {
    // beginPath() 是 Canvas 2D API 通过清空子路径列表开始一个新路径的方法
    ctx.beginPath();
    // arc() 是 Canvas 2D API 绘制圆弧路径的方法。圆弧路径的圆心在 (x, y) 位置，半径为 r ，根据anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
    ctx.arc(x, y, size, 0, Math.PI * 2)
    // fillStyle 是 Canvas 2D API 使用内部方式描述颜色和样式的属性。默认值是 #000 （黑色）
    ctx.fillStyle = color
    // fill() 是 Canvas 2D API 根据当前的填充样式，填充当前或已存在的路径的方法
    ctx.fill()
}

// 画线，使得笔触连续
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    // moveTo() 是 Canvas 2D API 将一个新的子路径的起始点移动到 (x，y) 坐标的方法
    ctx.moveTo(x1, y1)
    // lineTo() 是 Canvas 2D API 使用直线连接子路径的终点到 x，y 坐标的方法（并不会真正地绘制）
    ctx.lineTo(x2, y2)
    // strokeStyle 是 Canvas 2D API 描述画笔（绘制图形）颜色或者样式的属性。默认值是 #000 (black)
    ctx.strokeStyle = color
    // lineWidth 是 Canvas 2D API 设置线段厚度的属性（即线段的宽度）
    ctx.lineWidth = size * 2
    // stroke() 是 Canvas 2D API 使用非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径的方法
    ctx.stroke()
}

// 更新笔触宽度
function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

// 更改画笔颜色
colorEl.addEventListener('change', (e) => color = e.target.value)

// clearRect() 是 Canvas 2D API 的方法，这个方法通过把像素设置为透明以达到擦除一个矩形区域的目的
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))
