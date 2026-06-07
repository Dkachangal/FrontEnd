import {Routes, Route, Link } from "react-router-dom";
import DisplayVideo from "../components/DisplayVideo";

function VideoPage() {
    return (
        <div>
            <h1>Video</h1>
            <div className="Video-Box">
                <DisplayVideo />
                Square
            </div>
            <Link to = "/HomePage">GoToHome</Link>
        </div>
    )
}

export default VideoPage;