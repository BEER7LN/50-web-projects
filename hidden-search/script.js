const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    // toggle状态切换
    search.classList.toggle('active')
    input.focus()
})