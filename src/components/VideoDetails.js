import React from 'react';

class VideoDetails extends React.Component {

    render(){
        const {video} = this.props;
        
            if(!this.props.video){
            return <div > Loading...</div>

            }
            else {
                const videoSrc = "https://www.youtube.com/embed/"+video.id.videoId;
            
            return (
                
            <div className="ui segment">
                <div className="ui embed">
                    <iframe title={video.snippet.title} src={videoSrc} autoplay='true'></iframe>
                </div>
                <div className="ui header">{video.snippet.title}</div> 
                <p> {this.props.video.snippet.description } </p> </div>
                );
            }
    }
}

export default VideoDetails;