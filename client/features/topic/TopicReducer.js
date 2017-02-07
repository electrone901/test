export default function topicReducer(state = [], action) {
	switch (action.type) {
		case "FETCH_TOPICS":
			return action.payload.data;
		case "SELECTED_TOPICS":
			console.log('SELECTED_TOPICS payload from reducer',action.payload)
			return action.payload;
		default:
			return state;
	}
}
