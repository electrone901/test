// it is was working here
import React, {PropTypes} from 'react';


const Topic = React.createClass({
	getInitialState(){
		return {
      studentId: 1,
      selectedTopics: []
    };
  },
handleChange(e) {
	console.log('selected1', e.target.value);
        let topicName = e.target.value;
        let selectedTopics = this.state.selectedTopics;

        if (!e.target.checked) {
            selectedTopics = selectedTopics.filter(topic => parseInt(topic) !== parseInt(topicName));
        } else {
            selectedTopics.push(parseInt(topicName));
        }
        this.setState({
            selectedTopics: selectedTopics,
        });
    },

handleSelected() {
	console.log('topics_were_checked:', this.state.selectedTopics)
  console.log('studentId:', this.state.studentId)


  let payload = this.state;
  console.log('shoul be payload:', payload)

  // this.props.actions.selectedTopics({type: 'SELECTED_TOPICS', payload})
  // this.props.actions.selectedTopics(this.state.selectedTopics)



    },

render() {
	console.log('selectedTopics2:',this.state)
	console.log('are we getting selectedTopics32',this.state.selectedTopics)
	return (
		<div>
			<h1> Redux Select The Topics you Need Help With</h1>
			<div>
				{(this.props.topics) ? this.props.topics.map((topic,indx)=>(
					<div key={indx}>
						<input onChange={this.handleChange}
	          type = "checkbox"
	          id={topic.id}
	          value = {topic.id}/>
	          <label htmlFor={topic.id}>
	          <h4>{topic.name}</h4></label>
					</div>
				)) : null
				}
 		  </div>
 		  <input onClick={this.handleSelected}
 		   type = "button"
			 value = "Submit" />
 		</div>
	)
}
});
export default Topic;


