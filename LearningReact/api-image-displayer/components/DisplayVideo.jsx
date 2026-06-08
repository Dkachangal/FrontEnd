import getVideo from "../services/GetVideo";
import { useLocation } from "react-router-dom";
import {useState, useEffect} from "react";


function DisplayVideo() {
    const location = useLocation();
    const [vidWebUrl, updatingVidUrl] = useState('');

    const objectName = location.state?.videoTitleKaNaam || "Goat eating grass";
    const videoSize = location.state?.videoKaSize || "medium";

    useEffect (() => {
        async function fetchVideo() {
            const result = await getVideo(objectName, videoSize);
            if (result) {
                updatingVidUrl(result);
            }
        }
        // console.log(videoSize);
        fetchVideo();
    }, [objectName, videoSize])

    return (
        <div>
            {vidWebUrl ? (
                <div>
                    <h2>{videoSize}</h2>
                    <h3>{objectName}</h3>
                    <video src={vidWebUrl} controls />
                </div>
            ): (
                <>
                <h2>{videoSize}</h2>
                <h3>Rendering {objectName}...</h3>
                </>
            )}
            <p>This is the Video</p>
        </div>
    )
}

export default DisplayVideo;