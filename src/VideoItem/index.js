import React from 'react';
const VideoItem = (props) => {
	const onVideoClick = () => {
		props.selectedVideo(props.videoUrl);
	};
	return (
		<div onClick={() => onVideoClick()}>
			<button type='button'>
				<img src={props.image} alt={props.title} />
			</button>
			<div>
				<h3>{props.title}</h3>
			</div>
		</div>
	);
	//	}
};

export default VideoItem;
