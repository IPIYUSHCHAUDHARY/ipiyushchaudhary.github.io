import SectionTitle from "./SectionTitle";
import ContactCard from "./ContactCard";
import { contactDetails } from "../assets/content";

type contactType = {
    title: string,
    icon: string,
    cardContent?: {
        label: string,
        url?: string
    }
}

export default function Contact() {
    return (
        /* <!-- Contact section  --> */
        <div className="container-lg my-4" id="contact">
            <section className="contact">
                <SectionTitle head="Contact" subTitle="Get In Touch" />
                <div className="row">

                    {contactDetails.map((item : contactType, i: number) => {
                        return (
                            <div key={i} className="col-sm-6 card-wrapper">
                                {
                                item.cardContent ?
                                <ContactCard cardTitle={item.title} cardIcon={item.icon} cardLabel={item.cardContent.label} cardUrl={item.cardContent.url} /> : (                                    
                                <ContactCard cardTitle={item.title} cardIcon={item.icon}>
                                    <div className="social-profiles">
                                        <a href="https://linkedin.com/in/ipiyushchaudhary" target="_blank" rel="noreferrer" className="social-profiles-item"><i className="bi bi-linkedin"></i></a>
                                        <a href="https://github.com/ipiyushchaudhary" target="_blank" rel="noreferrer" className="social-profiles-item"><i className="bi bi-github"></i></a>
                                        <a href="mailto:ipiyushchaudhary@gmail.com" className="social-profiles-item"><i className="bi bi-envelope-fill"></i></a>
                                    </div>
                                </ContactCard>
                                )
                                }
                            </div>
                        )
                    })}
                                   
                </div>
            </section>
        </div>
    )
}