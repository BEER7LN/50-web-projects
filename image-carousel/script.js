const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

// setInterval() 方法重复调用一个函数或执行一个代码片段，在每次调用之间具有固定的时间间隔
let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

// 将图片视为多张拼接在一起的,然后进行移动
function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    // clearInterval() 移除定时器,重新设置一个新的定时器
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})
