import getData from "../services/GetImage";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function DisplayImage() {
    const location = useLocation();
    const [webUrl, stateWebUrl] = useState('');

    // this helps store the data in the variable objectKaNaam (stored as soon as the "/ImagePage" opens) - no deadlock like 
    // situation occurs. 
    const objectName = location.state?.objectKaNaam || "Goat";

    useEffect (()=> {
            async function fetchImage() {
            const result = await getData(objectName);
            if (result) {
                stateWebUrl(result);
            }
        }
        fetchImage();
    }, [objectName])

    return (
        <div>
            {webUrl ? (
                <div>
                    <img src={webUrl} />
                </div>
            ): (
                <>
                <h3>Rendering {objectName}...</h3>
                </>
            )}
            <p>This is the image</p>
        </div>
    )
}

export default DisplayImage;