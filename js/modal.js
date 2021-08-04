import blockScroll from './blockScroll.js';


function modal() {

    const {
        disableScroll,
        enableScroll
    } = blockScroll;
    

    const designBlockElem = document.querySelector('.design-block');
    const modalElem = document.querySelector('.modal');


    const openModal = () => {
        modalElem.classList.remove('hidden');
        disableScroll();
    };

    const closeModal = () => {
        modalElem.classList.add('hidden');
        enableScroll();
    };

    designBlockElem.addEventListener('click', e => {
        const target = e.target;
        if (target.matches('.more')) {
            openModal();
        }
    });

    modalElem.addEventListener('click', e => {
        const target = e.target;

        if (target.matches('.overlay, .modal__close')) {
            closeModal();
        }
    });
}

export default modal;