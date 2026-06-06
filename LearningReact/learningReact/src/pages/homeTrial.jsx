import StudentDisplayer from '../components/StudentDisplayer'

function HomePageTrial() {
    const students = [
        {name: "Divyansh", age: 20, favColor: "blue", dob: "29/06/2006"},
        {name: "Rohit", age: 19, favColor: "red", dob: "12/08/2004"},
        {name: "Satyarth", age: 17, favColor: "green", dob: "09/04/2007"},
        {name: "Shivam", age: 20, favColor: "yellow", dob: "17/02/2002"},
        {name: "Satyarth", age: 17, favColor: "purple", dob: "09/04/2007"},
        {name: "Shivam", age: 20, favColor: "black", dob: "17/02/2002"},
    ];

    return (
        <div>
            {students.map((student) => (
                <StudentDisplayer student={student} />
            ))}
        </div>

    )
}

export default HomePageTrial;