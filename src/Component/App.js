import React from 'react';

import SearchBar from './SearchBar';
import axios from '../api/utubeapi';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state={data: [], selectedVideo: null};

    componentDidMount(){
        this.onSearchSubmit('tending');
    }

    onSearchSubmit = async (term) => {
       const response = await axios.get('/search', {
            params: {
                q: term
            }
        });
       this.setState({data: response.data.items, selectedVideo: response.data.items[0]});
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
               <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className='five wide column'>
                <VideoList videos={this.state.data} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;