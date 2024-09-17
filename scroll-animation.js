
function scrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll'); 
    
    const observerOptions = {
        root: null, 
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element); 
    });

   
    window.addEventListener('scroll', function() {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(parallaxElement => {
            let speed = parallaxElement.getAttribute('data-speed');
            parallaxElement.style.transform = `translateY(${window.scrollY * speed}px)`;
        });
    });
}

document.addEventListener('DOMContentLoaded', scrollAnimation);
