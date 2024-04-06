import { ReactNode } from "react"

type ContactCardProps = {
    cardTitle: string,
    cardIcon: string,
    cardLabel?: string,
    cardUrl?: string,
    children?: ReactNode
}

export default function ContactCard({
    cardTitle,
    cardIcon,
    cardLabel,
    cardUrl,
    children
}: ContactCardProps) {
    return (
        <div className="card">
            <div className="card-icon"><i className={"bi bi-"+cardIcon}></i></div>
            <div className="card-content">
                <h3 className="card-title">{cardTitle}</h3>
                {children || <p className="card-detail">{cardUrl ? <a href={cardUrl}>{cardLabel}</a> : cardLabel} </p>}
            </div>
        </div>
    )
}