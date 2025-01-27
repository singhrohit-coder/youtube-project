

const VideoCard = ({ info }) => {
    //console.log(info);

    if (!info) {
        return null;
    }

    const { snippet, statistics } = info;

    const { channelTitle, title, thumbnails } = snippet;

    return (
         <div className="p-2 m-2 w-72 shadow-lg rounded-lg flex flex-col">
             <img className="rounded-lg w-full h-40 object-cover bg-slate-50" 
             alt="thumbnail" 
             src={thumbnails.medium.url} />
             <ul>
                 <li className="font-bold py-2">{title}</li>
                 <li className="text-gray-600">{channelTitle}</li>
                 <li>{statistics?.viewCount} views</li>
             </ul>
         </div>
     );
};

export default VideoCard;