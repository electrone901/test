import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes/routes';
import configureStore from './store/configureStore';
import './styles/styles.css'; //Webpack can import CSS files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {fetchStudent} from './features/student/studentActions';
import {fetchTopics} from './features/topic/TopicActions';

//imports configureStore (is a func that creates store with reducer, middleware) from configureStore.js
const store = configureStore();
//fetch data instudentActions.js
store.dispatch(fetchStudent());
store.dispatch(fetchTopics());

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>,
	document.getElementById('root')
);
