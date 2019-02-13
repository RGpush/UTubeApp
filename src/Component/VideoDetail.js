import './VideoItem.css';
import React from 'react';


const VideoDetail = ({video}) => {

    if(!video){
        return <div>Loading ... </div>
    }
    const videoSearch = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSearch} title={video.snippet.title}/>
            </div>
            <div className='ui segment'>
                <div className='ui header'>
                    <h4> {video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoDetail;