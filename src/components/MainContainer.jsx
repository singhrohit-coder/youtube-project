import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer"
//import VideoCard from "./VideoCard"


const MainContainer = () => {
    return (
        <div className="col-span-1">
            {/* <h1>MainContainer</h1> */}
            <ButtonList />
            <VideoContainer />
            {/* <VideoCard /> */}
        </div>
    );
};

export default MainContainer;