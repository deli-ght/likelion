const boards = document.querySelectorAll('.board_item');

boards.forEach(el => {
    el.addEventListener('click', () => {
    el.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    })
})