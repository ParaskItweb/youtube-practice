import React from 'react';
import Search from './Search';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
// import Axios from 'axios';
import youtube, { Key } from './api/youtube';

class App extends React.Component {
	state = {
		videos  : [],
		videoId : ''
	};
	onSearch = async (query) => {
		//Axios(`https://www.googleapis.com/youtube/v3/search${query}`);
		const res = await youtube.get('/search', {
			params : {
				part       : 'snippet',
				q          : query,
				maxResults : 5,
				key        : Key
			}
		});
		this.setState({ videos: res.data.items });
		//console.log(res.data.items);
	};
	onSelectVideo = (videoId) => {
		this.setState({ videoId: videoId });
		//this.selectedVideoId = videoId;
	};
	render () {
		return (
			<div>
				<Search onButtonClick={this.onSearch} />
				<VideoDetail videoId={this.state.videoId} />
				<VideoList selectedVideo={this.onSelectVideo} videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
