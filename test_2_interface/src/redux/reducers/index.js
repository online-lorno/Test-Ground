import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import AboutPage from './AboutPage';
import ContactUsPage from './ContactUsPage';
import HomePage from './HomePage';

export default (history) => combineReducers({
	router: connectRouter(history),
	HomePage,
	AboutPage,
	ContactUsPage
});
