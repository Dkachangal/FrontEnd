import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DropDownMenue({onSizeChange}) {
    const [videoSize, setVideoSize] = useState('medium');

    function handleChange(e) {
        const pickedValue = e.target.value;
        setVideoSize(pickedValue);

        if (onSizeChange) {
            onSizeChange(pickedValue);
        }
    }
    
    return (
        <>
            <select id="option" value = {videoSize} onChange={handleChange}>
                <option value = "disabled">--Select video Size--</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </>
    )
}

export default DropDownMenue;