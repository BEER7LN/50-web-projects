const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

// 隐藏所有图片,tag + 显示某张图片, tag
listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}