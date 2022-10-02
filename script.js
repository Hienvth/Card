const imgs = document.querySelectorAll('.img__options a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
    });
})

function slideImage() {
    const displayWidth = document.querySelector('.img__display--show img:first-child').clientWidth;

    document.querySelector('.img__display--show').style.transform = `translateX(${-(imgId -1) * displayWidth}px)`;
}