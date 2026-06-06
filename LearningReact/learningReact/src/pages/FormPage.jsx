import {useState} from 'react'
import StudentDisplayer from '../components/StudentDisplayer'

function FormPage() {
    const [name, setName] = useState("");

    const submitHandler = (e) => {
        alert("hello " + name);
        e.preventDefault();
    }

    return (
        <>

        <form style = {{display: "flex", flexDirection: "column", width: "200px", margin: "auto", marginTop: "50px"}} onSubmit = {submitHandler}>
            <input text = "text" placeholder="Enter your name" className="form-search" value = {name} onChange = {(e) => {
                setName(e.target.value);
            }}/>

            <button type="submit">Submit</button>
        </form>
            
        if (name === StudentDisplayer.student.name) {
            <StudentDisplayer student = {{name: name, age: 20, favColor: "blue", dob: "29/06/2006"}} />
        }
        
        </>
    )
}

export default FormPage