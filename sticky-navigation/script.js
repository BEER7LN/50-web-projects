const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    // scrollY返回文档在垂直方向已滚动的像素值
    // offsetHeight 是一个只读属性，它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}