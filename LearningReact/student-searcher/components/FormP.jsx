import {useState} from 'react'
import StudentObject from './StudentObject'

function FormP() {
    const searchStudent = (e) => {
        e.preventDefault();
        setCurrStudent(name);
    }

    const [name, setName] = useState('');

    return (
        <>
            <form onSubmit = {searchStudent}>
                <label>Name-</label>
                <input type = 'text' placeholder = 'Enter name of student' value = {name} onChange = {(e) => setName(e.target.value)} />
                <button type = 'submit'>Search</button>
            </form>

            {name && <StudentObject nameStu ={name} />}

        </>
    )
}

export default FormP