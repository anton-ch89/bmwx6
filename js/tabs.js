 function tabs () {

const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
const titles = document.querySelectorAll('.design__title');



// for (const tab of tabsHandlerElems) {
//     tab.addEventListener('click', () => {
//         tabsHandlerElems.forEach(item => {
//             if(tab === item) {
//                 item.classList.add('design-list__item_active');
//             }else {
//                 item.classList.remove('design-list__item_active');
//             }
//         })
//         tabsFieldElems.forEach(item => {
//             if (item.dataset.tabsField === tab.dataset.tabsHandler) {
//                 item.classList.remove('hidden');
//             }
//             else{item.classList.add('hidden')}
//         })
//     })
//}

tabsHandlerElems.forEach(tab => {
    tab.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => {
            if (tab === item) {
                item.classList.add('design-list__item_active');
            }else {item.classList.remove('design-list__item_active')}
        })
        tabsFieldElems.forEach(item => {
            if (item.dataset.tabsField === tab.dataset.tabsHandler) {
                item.classList.remove('hidden');
            }
            else {item.classList.add('hidden')
        }
        })
        titles.forEach(title => {
            if (title.classList.contains('hidden')){
                title.classList.remove('hidden');
            }else{title.classList.add('hidden');}
        });
    });
    
});

}

export default tabs;