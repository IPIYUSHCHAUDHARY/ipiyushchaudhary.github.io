import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import FeatureProjectCard from './FeatureProjectCard';
import { projectsDetails, featureProjectsDetails } from '../assets/content';

type projectType = {
    title: string,
    summary: string,
    stack: string[],
    links: {
        live: string,
        code: string
    }
}

type featureProjectType = {
    title: string,
    summary: string,
    stack: string[],
    links: {
        live: string,
        code: string
    },
    coverImg: string
}

export default function Projects() {
    return (
        /* <!-- Projects section  --> */
        <div className="container-lg my-4" id='projects'>
            <section className="projects">
                <SectionTitle head="Projects" subTitle="Things I've Built" />

                <div className="projects-sec">

                    { featureProjectsDetails.map((item: featureProjectType, i: number) => {
                        return <FeatureProjectCard key={i} projectTitle={item.title} projectSummary={item.summary} projectStack={item.stack} projectLinks={item.links} projectCover={item.coverImg} projectCount={i+1} />
                    }) }
                                                            
                </div>
                
                <div className="projects-sec">
                    <h3 className="projects-title">Other Projects</h3>
                    <div className="row row-gap-4">

                        { projectsDetails.map((item: projectType, i: number) => {
                            return (
                                <div key={i} className="col-lg-4 col-sm-6 col-12">
                                    <ProjectCard  projectTitle={item.title} projectSummary={item.summary} projectStack={item.stack} projectLinks={item.links} />
                                </div>
                            )
                        }) }
                            
                    </div>                        
                </div>         
            </section>
        </div>
    )
}