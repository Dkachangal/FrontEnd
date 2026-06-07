// const API_KEY = "56205863-2aeeee7ea49d3906f1d45bb91";
const API_KEY = "56210043-bdc8749fce2e7b6797a4eacfa";

const BASE_URL = "https://pixabay.com/api/videos/";

async function getVideo(user_obj, vidSize) {
        let URL = `${BASE_URL}?key=${API_KEY}&q=${user_obj}&pretty=true`;
        let promise = await fetch(URL);
        let outVideoData = await promise.json();

        if (outVideoData.hits.length > 0) return outVideoData.hits[0].videos[vidSize].url;
        else return null;
}

export default getVideo;