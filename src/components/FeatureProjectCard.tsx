type FeatureProjectCardProps = {
    projectTitle: string,
    projectSummary: string,
    projectStack: string[],
    projectLinks: {
        live: string,
        code: string
    },
    projectCover: string,
    projectCount: number
}

export default function FeatureProjectCard({
    projectTitle,
    projectSummary,
    projectStack,
    projectLinks,
    projectCover,
    projectCount
}: FeatureProjectCardProps) {
  return (
    <div className={"feature-project "+((projectCount % 2) ? "" : "feature-project--right")}>
        <div className="project-content">
            <p className="project-heading">Featured Project</p>
            <h4 className="project-title"><a href={projectLinks.live} target="_blank" rel="noreferrer">{projectTitle}</a></h4>
            <p className="project-summary">{projectSummary}</p>
            <ul className="project-stack">

                {projectStack.map((item: string, i: number) => {
                    return <li key={i}>{item}</li>
                })}

            </ul>
            <div className="project-links">
                <a href={projectLinks.code} target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                <a href={projectLinks.live} target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
            </div>
        </div>
        <div className="project-cover">
            <a href={projectLinks.live} target="_blank" rel="noreferrer">
                <img className="img-fluid" src={projectCover} alt="project cover" />
            </a>
        </div>
    </div>
  )
}
