const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    // split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。 
    // transition-delay属性规定了在过渡效果开始作用之前需要等待的时间
    // join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
    // 在map方法中写箭头函数，会将箭头函数处理的结果返回到一个新的数组或者其他的可遍历对象。
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})