const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        // 给点击的图片单独加active
        panel.classList.add('active')
    })
})

// 移除所有的active
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}