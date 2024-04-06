type SectionTitleProps = {
  head : string,
  subTitle?: string
}

export default function SectionTitle({
  head,
  subTitle
}: SectionTitleProps) {
  return (
    <div className="section-title">
      <h2>{head}</h2>
      {subTitle && <p>{subTitle}</p>}
    </div>
  )
}