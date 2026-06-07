import {Routes, Route, Link} from 'react-router-dom';
import DisplayImage from '../components/DisplayImage';


function ImagePage() {
    return (
        <div>
            <h1>Image</h1>
            <div className='Image-box'>
                <DisplayImage />
                Square
            </div>
            <Link to = "/HomePage">GoToHome</Link>
        </div>
    )
}

export default ImagePage;