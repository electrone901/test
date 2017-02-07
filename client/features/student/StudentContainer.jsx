//This component handles the Home template
import React, {Component, PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchStudent} from './studentActions';
const debug  = require('debug')('student');
import Student from './Student';


class StudentContainer extends Component{
	// gives access to props
	constructor(props, context){
		super(props, context);
		console.log('student_container props',props);
	}
}

// validates the data that comes back from the state/store or actions
StudentContainer.propTypes = {
	actions : PropTypes.object.isRequired,
	student: PropTypes.object,
	fetchStudent: PropTypes.func
};

// give a specific state
const mapStateToProps= (state,ownProps)=>{
	return {
		student: state.studentReducer
	};
};

// gives a slice of action in this case fetchStudent
// to use props.action.fetchStudent
const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators({ fetchStudent }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Student);
