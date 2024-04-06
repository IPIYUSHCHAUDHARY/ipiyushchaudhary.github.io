import SectionTitle from "./SectionTitle";
import ResumeTile from "./ResumeTile";
import { educationDetails, techStackDetails, experienceDetails} from '../assets/content';

type educationType = {
    head: string,
    headLink?: string,
    subHead: string,
    tag: string
}

type experienceType = {
    head: string,
    subHead: string,
    tag: string,
    roles: string[]
    
}
export default function Resume() {
    
    return (
        /* <!-- Resume section  --> */
        <div className="container-lg my-4" id="resume">
            <section className="resume" >
                <SectionTitle head="Resume" subTitle="Check my resume" />
                <div className="row">
                    <div className="col-md-6">
                        <div className="resume-sec">
                            <h3 className="resume-title">Summary</h3>
                            <p className="fst-italic">Innovative, task-driven Frontend Developer with 3 years of experience in developing and implementing engaging user interfaces. Proficient in HTML, CSS, and JavaScript, with a strong focus on responsive web development, cross-browser compatibility, and performance enhancement.</p>
                        </div>
                        <div className="resume-sec">
                            <h3 className="resume-title">Education & Certifications</h3>

                            {educationDetails.map((item: educationType, i: number) => {
                                return (
                                    <ResumeTile key={i} head={item.head} headLink={item.headLink} subHead={item.subHead} isTag={true} tag={item.tag}/>
                                )
                            })}
                            
                        </div>
                        <div className="resume-sec">
                            <h3 className="resume-title">TECHNOLOGY STACK</h3>
                            <p className="d-flex flex-wrap fst-italic techstack-items">

                                {techStackDetails.map((item: string, i: number) => {
                                    return (
                                        <span key={i} className="tag mb-1">{item}</span>
                                    )
                                })}
                                
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="resume-sec">
                            <h3 className="resume-title">Professional Experience</h3>

                            {experienceDetails.map((item: experienceType, i: number) => {
                                return (
                                    <ResumeTile key={i} head={item.head} subHead={item.subHead} isTag={false} tag={item.tag} roles={item.roles}/>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}