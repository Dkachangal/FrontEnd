function DisplayStudent({ student }) {
    return (
        <>
        <div style = {{border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: 'lightgray', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', width: '300px', textAlign: 'left', fontFamily: 'Arial, sans-serif', color: '#333', display: 'inline-block', verticalAlign: 'top', transition: 'transform 0.2s', cursor: 'pointer'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <h3>Name: {student.name}</h3>
            <h4>RollNo: {student.rollNo}</h4>
            <h4>Age: {student.age}</h4>
            <h4>Section: {student.section}</h4>
        </div>
        </>
    )
}

export default DisplayStudent