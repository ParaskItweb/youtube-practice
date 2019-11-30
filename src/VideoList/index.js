import React from 'react';
import VideoItem from '../VideoItem';

const VideoList = (props) => {
	return (
		<div>
			{props.videos.map((videos) => {
				return (
					<VideoItem
						key={videos.id.videoId}
						image={videos.snippet.thumbnails.high.url}
						title={videos.snippet.title}
						videoUrl={videos.id.videoId}
						selectedVideo={props.selectedVideo}
					/>
				);
			})}
		</div>
	);
};
export default VideoList;
