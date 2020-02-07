import React from 'react';
import axios,{params} from '../api';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
class App extends React.Component {
    state= { videos: [] , selectedVideo : null }
    onVideoSelect = (video)=>{
        this.setState({selectedVideo:video});
        console.log(video);
    }
    componentDidMount(){
        this.onFormSubmit('technology');
    }
    onFormSubmit=async (term)=>{
        console.log(term);
        params.q = term;
         const response  = await axios.get('/search',{
            params: params
        });
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0] })

    }
    render(){
        return(
            <div className="ui container">
            <SearchBar onSubmit={this.onFormSubmit}/>
            <p> {this.state.videos.length} videos found</p>
            <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                <VideoDetails video={this.state.selectedVideo} />
                </div>
                <div className="five wide column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                </div>
            </div>
            </div>
            </div>
            
        )
    }

}
export default App;