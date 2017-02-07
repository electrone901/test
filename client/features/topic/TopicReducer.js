// it is was working here
export default function topicReducer(state = [], action) {
	switch (action.type) {
		case "FETCH_TOPICS":
			return action.payload.data;

//im not sure in this one
		case "SELECTED_TOPICS":
			return Object.assign({},state, action.payload);
		default:
			return state;
	}
}

