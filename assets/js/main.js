let body = document.body;
let navBtns = document.querySelectorAll('header nav .nav-link');
let progressBars = document.querySelectorAll('.about .skill-item .progress');

navBtns.forEach( (item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let elem = e.target;

        if(elem.closest('.navbar-collapse').classList.contains('show')) {
            elem.closest('.navbar-collapse').classList.remove('show');
            elem.closest('.main-navbar').querySelector('.navbar-toggler').classList.add('collapsed');
            elem.closest('.main-navbar').querySelector('.navbar-toggler').setAttribute('aria-expanded','false');
        }

        if(elem.dataset.target == 'home'){
            if(!body.classList.contains('landing')) {
                body.classList.add('landing');
                document.querySelector('header nav .nav-link.active')?.classList.remove('active');
                elem.classList.add('active');
                document.querySelector('section.show')?.classList.remove('show');
            }
        } else {
            if(body.classList.contains('landing')){
                body.classList.remove('landing');
            }
            if(!elem.classList.contains('active')) {
                document.querySelector('header nav .nav-link.active')?.classList.remove('active');
                elem.classList.add('active');
                document.querySelector('section.show')?.classList.remove('show');
                document.querySelector('section.'+elem.dataset.target)?.classList.add('show');
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0;
            }             
        }        
    });
});

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.disconnect();
            progressBars.forEach( item => {
                let width = 0;
                const animateInterval = setInterval(() => {
                    if(width <= item.getAttribute('aria-valuenow')) {
                        item.querySelector('.progress-bar').style.width = width+'%';
                        width++;
                    } else {
                        clearInterval(animateInterval);
                    }
                }, 5)
            });
        }
    })
}, {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
});
observer.observe(document.querySelector('.about .skills-wrapper .row'));

