 function accordeon() {

     'use strict';

     const featureLinkElems = document.querySelectorAll('.feature__link');
     const featureSubElems = document.querySelectorAll('.feature-sub');

     featureLinkElems.forEach((btn, index) => {
         btn.addEventListener('click', () => {
             if (btn.classList.contains('feature__link_active')) {
                 btn.classList.remove('feature__link_active');
                 featureSubElems[index].classList.add('hidden');
             } else {
                 featureLinkElems.forEach((featureLinkElem) => {
                     featureLinkElem.classList.remove('feature__link_active')
                 })
                 featureSubElems.forEach((featureSubElem) => {
                     featureSubElem.classList.add('hidden');
                 })

                 btn.classList.add('feature__link_active');
                 featureSubElems[index].classList.remove('hidden');
             }
         });
     });
 }

 export default accordeon;