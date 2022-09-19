const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
// idx必需是全局变量
let idx = 1
// speed是指循环运动周期，而不是速率
let speed = 300 / speedEl.value

writeText()

function writeText() {
  // slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    // setTimeout()方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码
    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)