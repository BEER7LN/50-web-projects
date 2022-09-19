const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

// 改变小杯子
function highlightCups(idx) {
    // 如果已经100%，点击最后一个，idx-1及之前的都有水
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
    // 如果需要减少，且点击最后满的，idx-1及之前的都有水
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    // 如果需要减少，idx不是最后满的，idx及之前的都有水
    // <=idx的瓶子都有水，>idx的没有
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

// 改变大杯子
function updateBigCup() {
    // 有水的小杯子的数量
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    // 完全没水
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    // 有全部的水
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
