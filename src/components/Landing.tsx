export default function Landing() {

    return (
        /* <!-- landing section --> */
        <div className="container-lg landing">
            <div className="col-auto landing-text-wrapper">
                <p className="landing-text">Hi, my name is</p>
            </div>    
            <div className="col-auto landing-title-wrapper">
                <h1 className="landing-title">Piyush Chauhan</h1>
            </div>
            <div className="col-auto landing-subtitle-wrapper">
                <h2 className="landing-subtitle">I'm a passionate <span className="portfolio-role">Frontend Developer</span> from India</h2>
            </div>    
            <div className="col-auto landing-navbar">
                <ul className="navbar-nav flex-row flex-wrap justify-content-center justify-content-md-start">
                    <li><a href="#about" className="nav-link" data-target="about">About</a></li>
                    <li><a href="#resume" className="nav-link" data-target="resume">Resume</a></li>
                    <li><a href="#projects" className="nav-link" data-target="projects">Projects</a></li>
                    <li><a href="#contact" className="nav-link" data-target="contact">Contact</a></li>                
                </ul>
            </div>
            <div className="col-auto landing-social-links">
                <a href="https://linkedin.com/in/ipiyushchaudhary" target="_blank" rel="noreferrer" className="social-links-item" aria-label="Go to Linkedin profile"><i className="bi bi-linkedin text-light"></i></a>
                <a href="https://github.com/ipiyushchaudhary" target="_blank" rel="noreferrer" className="social-links-item" aria-label="Go to Github profile"><i className="bi bi-github text-light"></i></a>
                <a href="mailto:ipiyushchaudhary@gmail.com" className="social-links-item" aria-label="Send mail"><i className="bi bi-envelope-fill text-light"></i></a>
            </div>
        </div>
    )
}