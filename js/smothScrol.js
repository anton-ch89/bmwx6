

export default function smothScroll (SPEED = 0.5) {
    const scrolled = event => {

        const target = event.target;
         if (target.matches('[href^="#"]')) {
            event.preventDefault();
        
         let start = 0;
        const pageY = window.pageYOffset;
        const hash = target.getAttribute('href');
        const elem = document.querySelector(hash);
        const coordElem = elem.getBoundingClientRect().top;
        
        
        const step = time => {
        if (!start) start = time;
        
        const progress = time - start;
        
        const r = (coordElem < 0 ? 
            Math.max(pageY-progress/SPEED, pageY + coordElem) : 
            Math.min(pageY+progress/SPEED, pageY + coordElem));
        
            window.scrollTo(0, r);
        
            if ( r < pageY + coordElem)
            requestAnimationFrame(step);
        }
        
        requestAnimationFrame(step)
         }
        }
        
        document.body.addEventListener('click', scrolled);
        
        
}



// const smoothScrolElements = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

// smoothScrolElements.forEach(link => {
//     link.addEventListener('click', (event) => {

//         event.preventDefault();

//         const id = link.getAttribute('href');
//         document.querySelector(id).scrollIntoView({
//             behavior: "smooth"
//         })
//     })
// })