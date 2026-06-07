import { useNavigate } from "react-router-dom";
import { useState } from "react"; 
import DropDownMenue from '../components/DropDownMenue';
import '../style/HomePage.css';

function InputObjectForm() {
    const navigate = useNavigate();
    const [name, storeUserObj] = useState('');
    const [videoTitle, changingVideoTitle] = useState('');
    const [choosenSize, setChoosenSize] = useState('medium');
    
    function onSubmit(e) {
        e.preventDefault();
        navigate("/ImagePage", {state: {objectKaNaam: name}});
    }
    

    function submitVideo(e) {
        e.preventDefault();
        
        navigate("/VideoPage", {
            state: {
                videoTitleKaNaam: videoTitle,
                videoKaSize: choosenSize
            }
        })
    }

    return (
        <>
            <div className="form-all">
                <form onSubmit={onSubmit}>
                <div className="input-box">
                    <label className="lable-input">Get Image</label>
                    <input type="text" className="input-text-box" value = {name} onChange={(e) => storeUserObj(e.target.value)}/>
                    <p></p>
                    <button type="submit" className="Submit-button" id="img-submit-button">Get Image</button>
                </div>
                </form>
        
                <form onSubmit={submitVideo}>
                    <div className="input-box">
                        <label className="lable-input">Get Video</label>
                        <input type="text" className="input-text-box" value = {videoTitle} onChange={(e) => changingVideoTitle(e.target.value)} placeholder="Search Video"/>
                        <DropDownMenue onSizeChange={setChoosenSize}/>
                        <button type="submit" className="Submit-button" id="vid-submit-button">Get Video</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default InputObjectForm;