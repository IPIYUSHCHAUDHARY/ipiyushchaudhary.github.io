import { useEffect, useState } from "react";

export default function Header() {
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<string>('home');

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let elem = entry.target;                

                if(elem.classList.contains('landing')) {
                    setIsSticky(false);
                    setIsActive('home');
                } else{
                    setIsSticky(true);                    
                    setIsActive(elem.classList[0]);
                }
                
            }
        }, 
        {
            threshold: [0.25, 0.5, 0.75]
        });
        
        document.querySelectorAll('.container-lg > section, .container-lg.landing').forEach(item => {
            observer.observe(item);
        })

        return () => {
            observer.disconnect();
        };

    }, []);

    return (
        /* <!-- header section --> */
        <header className={"py-3" + (isSticky ? ' isSticky' : '')}>
            <div className="container-lg d-flex align-items-center justify-content-between">
                <p className="header-title d-none d-lg-block"><a href="index.html">Piyush Chauhan</a></p>
                <nav className="navbar navbar-expand navbar-dark main-navbar overflow-x-auto py-0" aria-label="main navbar">
                    <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-label="Toggle navigation" aria-expanded="false">
                        <i className="bi bi-list text-light fs-3 position-relative"></i>
                        <i className="bi bi-x text-light fs-3 position-relative"></i>
                    </button>
                    <div className="navbar-collapse collapse" id="mainNav">
                        <ul className="navbar-nav justify-content-end gap-4 ">
                            <li><a href="#" className={"nav-link" + ( isActive === 'home' ? ' active' : '')} data-target="home">Home</a></li>
                            <li><a href="#about" className={"nav-link" + ( isActive === 'about' ? ' active' : '')} data-target="about">About</a></li>
                            <li><a href="#resume" className={"nav-link" + ( isActive === 'resume' ? ' active' : '')} data-target="resume">Resume</a></li>
                            <li><a href="#projects" className={"nav-link" + ( isActive === 'projects' ? ' active' : '')} data-target="projects">Projects</a></li>
                            <li><a href="#contact" className={"nav-link" + ( isActive === 'contact' ? ' active' : '')} data-target="contact">Contact</a></li>                
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}