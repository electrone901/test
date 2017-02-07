// it is was working here
import React, {Component, PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTopics} from './TopicActions';
const debug = require('debug')('topics');
import Topic from './Topic';
import {selectedTopics} from './TopicActions';

class TopicContainer extends Component{
	constructor(props, context){
		super(props, context);
		// it was working 5pm
		this.state.selectedTopics = {selectedTopics: [] }
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({
		fetchTopics,selectedTopics}, dispatch)
});

const mapStateToProps = (state, ownProps) => {
	return  {
		topics: state.topicReducer,
		selectedTopics: state.selectedTopicsReducer
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Topic);



