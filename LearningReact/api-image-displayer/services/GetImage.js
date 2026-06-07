const API_KEY = "56205863-2aeeee7ea49d3906f1d45bb91";
// const API_KEY = "56210043-bdc8749fce2e7b6797a4eacfa";   ---  divyanshacts29

const BASE_URL = "https://pixabay.com/api/";

async function getData (user_obj) {
    let URL = `${BASE_URL}?key=${API_KEY}&q=${user_obj}&image_type=photo&pretty=true`;
    let promise = await fetch(URL);
    let outData = await promise.json();
    if (outData.hits.length >0) return outData.hits[0].webformatURL;
    else return null;
}

export default getData;