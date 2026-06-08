import {Routes, Route, Link} from 'react-router-dom';
import DisplayImage from '../components/DisplayImage';
import styles from '../style/DisplayImageStyle.module.css';


function ImagePage() {
    return (
        <div>
            <h1>Image</h1>
            <div className={styles.pageBackground}>
                <DisplayImage />
                Square
            </div>
            <Link to = "/HomePage">GoToHome</Link>
        </div>
    )
}

export default ImagePage;