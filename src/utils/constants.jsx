// never export api key
const GOOGLE_API_KEY = "AIzaSyBiNOMOVC_xEAXG1quK0neBqWR3P2lXOC0";

export const YOUTUBE_VIDEOS_API = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

// it takes Your API Key.That means we have to get our own api key to use this.
// how to get api key ? type [youtube api key]


export const YOUTUBE_LOGO_URL = 
"https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg";