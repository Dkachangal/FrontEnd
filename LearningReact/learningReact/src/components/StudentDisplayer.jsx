function StudentDisplayer({ student }) {
    return (
        <>
        <div style = {{border: "2px solid black", margin: "10px", padding: "10px", backgroundColor: "beige"}}>
            <h1 style = {{color: student.favColor}}>{student.name}</h1>
            <h2 style = {{color: student.favColor}}>{student.age}</h2>
            <h3 style = {{color : student.favColor}}>{student.favColor}</h3>
            <h4 style = {{color: student.favColor}}>{student.dob}</h4>
        </div>
            
        </>
    )
}

export default StudentDisplayer;