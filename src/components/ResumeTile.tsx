type ResumeTileProps = {
    head: string,
    headLink?: string,
    subHead: string,
    isTag: boolean,
    tag: string,
    roles?: string[]
}

export default function ResumeTile({
    head,
    headLink,
    subHead,
    isTag,
    tag,
    roles
}: ResumeTileProps) {
    return (
        <div className="resume-item">
            <h4>{(headLink) ? <a href={headLink} target="_blank" rel="noreferrer">{head}<i className="bi bi-arrow-up-short"></i></a> : head}</h4>
            <p className="d-flex justify-content-between align-items-center fst-italic">{subHead}<span className={(isTag) ? "tag" : ""}>{tag}</span></p>
            {(roles) &&  (
                <ul className="ps-3">
                    
                    {roles.map((item : string, i: number) => {
                        return (
                            <li key={i}>{item}</li>
                        )
                    })}
                    
                </ul>
            )}
        </div>
    )
}