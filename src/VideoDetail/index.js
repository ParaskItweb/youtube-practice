import React from 'react';
const VideoDetail = (props) => {
	let baseUrl = 'https://www.youtube.com/embed/';
	console.log(props.videoId);
	return (
		<div>
			<iframe
				title='test'
				width='560'
				height='315'
				src={baseUrl + props.videoId}
				frameBorder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			/>
		</div>
	);
};
export default VideoDetail;
