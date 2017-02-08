import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../features/app/App';
import MentorContainer from '../features/mentor/MentorContainer';
import StudentContainer from '../features/student/StudentContainer';

import TopicContainer from '../features/topic/TopicContainer';
import Grade from '../features/grade/Grade';
import Branch from '../features/Branch1';


export default (
	<Route path="/" component={App}>
		<Route path='/student' component={StudentContainer}/>
		<Route path='/topic' component={TopicContainer}/>
		<Route path='/mentor' component={MentorContainer}/>
		<Route path='/grade' component={Grade}/>
		<Route path='/branch1' component={Branch}/>
	</Route>
);
