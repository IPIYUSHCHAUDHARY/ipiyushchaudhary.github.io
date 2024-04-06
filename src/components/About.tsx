import SectionTitle from './SectionTitle';
import SkillProgress from './SkillProgress';
import userImg from '../assets/me.webp';
import { expertiseDetails, skillDetails} from '../assets/content';

type skillType = {
    label: string,
    value: number,
    ariaLabel: string
}

export default function About() {    
    return (
        /* <!-- About section  --> */
        <div className="container-lg my-4" id="about">
            <section className="about">
                <SectionTitle head="About" subTitle="Learn more about me" />
                <div className="row">
                    <div className="col-sm-4">
                        <img src={userImg} className="img-fluid" alt="user" />
                    </div>
                    <div className="col-sm-8">
                        <h3 className="mt-sm-0 mt-3 about-role">Frontend UI Developer</h3>
                        <p className="about-summary"><i>Innovative, task-driven professional with <strong>3 years of experience</strong> in frontend development across diverse industries. Proficient in creating user interfaces, writing and testing codes, troubleshooting issues, and implementing new features based on user feedback.</i></p>
                        <p className="about-summary"><i>Here are a few areas in which I've expertise:</i></p>
                        <div className="row about-details">

                            {expertiseDetails.map((item: string, i: number) => {
                                return (
                                    <div key={i} className="col-xl-6">
                                        <p>{item}</p>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
                <div className="skills-wrapper">
                    <SectionTitle head="Skills" />
                    <div className="row">

                        {skillDetails.map((item: skillType, i: number) => {
                            return (
                                <div key={i} className="col-md-6 skill-item">
                                    <SkillProgress skillLabel={item.label} skillValue={item.value} skillAriaLabel={item.ariaLabel} />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </div>
    )
}