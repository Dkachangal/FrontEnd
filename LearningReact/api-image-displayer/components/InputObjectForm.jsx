import { useNavigate } from "react-router-dom";
import { useState } from "react"; 
import DropDownMenue from '../components/DropDownMenue';


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
            <form onSubmit={onSubmit}>
                <div className="image-input-box">
                    <label className="lable-input">Get Image</label>
                    <input type="text" className="Input-Box" value = {name} onChange={(e) => storeUserObj(e.target.value)}/>
                    <p></p>
                    <button type="submit" className="Submit-button">Get Image</button>
                </div>
            </form>

            <form onSubmit={submitVideo}>
                <div className="video-input-box">
                    <label className="lable-input">Get Video</label>
                    <input type="text" className="Input-Box" value = {videoTitle} onChange={(e) => changingVideoTitle(e.target.value)} placeholder="Search Video"/>
                    <button type="submit" className="Submit-button">Get Video</button>
                    <DropDownMenue onSizeChange={setChoosenSize}/>
                </div>
            </form>
        </>
    )
}

export default InputObjectForm;