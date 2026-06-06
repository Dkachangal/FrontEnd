import DisplayStudent from './DisplayStudent'

function StudentObject ({nameStu}) {
    const student = [
        {name: 'John Doe',
        rollNo: '12345',
        age: 20,
        section: 'A'
        }, 
        {
            name: 'Jane Smith',
            rollNo: '67890',
            age: 22,
            section: 'B'
        }, 
        {
            name: 'Alice Johnson',
            rollNo: '54321',
            age: 19,
            section: 'A'
        }, 
        {
            name: 'Bob Brown',
            rollNo: '98765',
            age: 21,
            section: 'B'
        }, 
        {
            name: 'Charlie Davis',
            rollNo: '24680',
            age: 20,
            section: 'A'
        }, 
        {
            name: 'Emily Wilson',
            rollNo: '13579',
            age: 22,
            section: 'B'
        }, 
        {
            name: 'David Lee',
            rollNo: '11223',
            age: 19,
            section: 'A'
        }
    ]
        
    return student.map((child) => {
                if (child.name.toLowerCase().startsWith(nameStu.toLowerCase())) {
                    return <DisplayStudent student = {child} />
                } 
                else {
                    console.log('No match found for', nameStu);
                    return null;
                }
    });
        
    
}

export default StudentObject