function RevisionComponent({object}) {
    return (
        <>
            <h1 style = {{color: object.titleColor}}>{object.title}</h1>
            <h2 style = {{color: object.subTitleColor}}>{object.subtitle}</h2>
        </>
    )
}
export default RevisionComponent