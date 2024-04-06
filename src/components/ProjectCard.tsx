type ProjectCardProps = {
    projectTitle: string,
    projectSummary: string,
    projectStack: string[],
    projectLinks: {
        live: string,
        code: string
    }
}

export default function ProjectCard({
    projectTitle,
    projectSummary,
    projectStack,
    projectLinks
}: ProjectCardProps) {
  return (
    <div className="project-card">
        <div className="card-header">
            <span className="folder-icon"><i className="bi bi-folder"></i></span>
            <div className="project-links">
                <a href={projectLinks.code} target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                <a href={projectLinks.live} target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
            </div>
        </div>
        <h4 className="project-title"><a href={projectLinks.live} target="_blank" rel="noreferrer">{projectTitle} </a></h4>
        <p className="project-summary">{projectSummary}</p>
        <ul className="project-stack">

            {projectStack.map((item: string, i: number) => {
                return <li key={i}>{item}</li>
            })}
            
        </ul>
    </div>
  )
}
