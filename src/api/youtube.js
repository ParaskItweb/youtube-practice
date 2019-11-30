import Axios from 'axios';
export const Key = 'AIzaSyDsMr23oyIISsPGILfdiPmWbwRSen8274E';

export default Axios.create({
	baseURL : 'https://www.googleapis.com/youtube/v3'
});
