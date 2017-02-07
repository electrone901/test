import React, {PropTypes} from 'react';
const Topic = (props) => {
	console.log('topic props',props)
	return (
		<div>
			<h1>Select The Topics you Need Help With</h1>
			<div>
				{(props.topics) ? props.topics.map((topic,indx)=>(
					<div key={indx}>
						<input
	          type = "checkbox"
	          name = "topic"
	          value = {topic.id}/>{topic.name}
					</div>
				)) : null
				}
 		  </div>
 		  <input onClick = {props.actions.selectedTopics(props.selectedTopics())} type = "button"
	            value = "Submit" />
 		</div>
	)
};
export default Topic;



