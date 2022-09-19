const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

// setInterval() 方法重复调用一个函数或执行一个代码片段，在每次调用之间具有固定的时间间隔(ms);返回一个 interval ID，该 ID 唯一地标识时间间隔，因此你可以稍后通过调用 clearInterval() 来移除定时器
let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  // filter用于定于元素(通常是 <img>)的可视效果
  // blur()给图像设置高斯模糊
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
