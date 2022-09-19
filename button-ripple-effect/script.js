const buttons = document.querySelectorAll('.ripple')
const body = document.querySelector('body')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // clientX 是只读属性， 它提供事件发生时的应用客户端区域的水平坐标 (与页面坐标不同)
        const x = e.clientX
        const y = e.clientY

        // offsetTop 为只读属性，它返回当前元素相对于其 offsetParent 元素的顶部内边距的距离
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})