var card = document.querySelector('.card');
        // card.addEventListener('click', function () {
        //     card.classList.add('is-flipped');
        //     setTimeout(() => {
        //         card.classList.remove('is-flipped')
        //     }, 5000)
        // });

card.addEventListener('click', (e)=> {
    card.classList.toggle("is-flipped");
})