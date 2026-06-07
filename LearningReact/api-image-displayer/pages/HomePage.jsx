import {Routes, Route} from 'react-router-dom';
import InputObjectForm from '../components/InputObjectForm';

function HomePage() {
    return (
        <div>
            <h1 className="Title-Display">API Image Displayer</h1>
            <InputObjectForm />
        </div>
    )

}

export default HomePage;