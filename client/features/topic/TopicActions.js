// it is was working here
import axios from 'axios';

export function fetchTopics() {
	const request = axios.get("/api/topic");
	return (dispatch) => {
		request.then((data) => {
			dispatch({type: 'FETCH_TOPICS', payload:data});
		});
	};
}

//here is going to be the api call
export function selectedTopics(payload) {
	return {type: 'SELECTED_TOPICS', payload};
}

