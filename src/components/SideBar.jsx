import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const SideBar = () => {

    // what i will pass in my useSelector ?
    // Subscribing to specific part of the app not whole app
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if (!isMenuOpen) return null;// early return pattern

    return (
        <div className="shadow-lg p-5 w-48">
            <ul>
            <li className="font-bold"><Link to="/">Home</Link></li>
            <li className="font-bold">Shorts</li>
            <li className="font-bold">Subscriptions</li>
            </ul>
            <div className="mt-2">
                <h1 className="font-bold">You</h1>
            <ul className="px-2">
                <li>History</li>
                <li>Playlists</li>
                <li>Watch Later</li>
                <li>Liked Videos</li>
            </ul>
            </div>
            <div className="mt-2">
                <h1 className="font-bold">Explore</h1>
                <ul className="px-2">
                    <li>Trending</li>
                    <li>Shopping</li>
                    <li>Music</li>
                    <li>Movies</li>
                    <li>Live</li>
                    <li>Gaming</li>
                    <li>News</li>
                    <li>Sports</li>
                    <li>Courses</li>
                    <li>Fashion & Beauty</li>
                    <li>Podcasts</li>
                </ul>
            </div>
            <MenuItem />
        </div>
    );
};

export default SideBar;