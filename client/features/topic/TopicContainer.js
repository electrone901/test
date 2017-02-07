import React, {Component, PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTopics, selectedTopics} from './TopicActions';
const debug = require('debug')('topics');
import Topic from './Topic';
import $ from 'jquery';

class TopicContainer extends Component{
	constructor(props, context){
		super(props, context);
		console.log('topicContainer props',props)
		// this.state = {
		// 	selectedTopics:[]
		// };
	}

	handleChange(inputField, e) {
        let isChecked = $(e.target).prop("checked");
        let topicName = e.target.value;
        let list = this.state.selectedTopics;

        if (!isChecked) {
            list = list.filter(topic => topic !== topicName);
        } else {
            list.push(topicName);
        }
        this.setState({
            selectedTopics: list
        });
    }
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({
		fetchTopics,selectedTopics}, dispatch)
});

const mapStateToProps = (state, ownProps) => {
	return  {
		topics: state.topicReducer.topics,
		selectedTopics: state.topicReducer.selectedTopics
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Topic);


