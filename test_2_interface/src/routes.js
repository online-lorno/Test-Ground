/* eslint-disable object-curly-newline */
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import HomePage from './pages/HomePage';

const routes = [
	{ path: '/', exact: true, Layout: BasicLayout, Component: HomePage },
	{ path: '/about', exact: true, Layout: BasicLayout, Component: AboutPage },
	{ path: '/contact-us', exact: true, Layout: BasicLayout, Component: ContactUsPage }
];

function Routes() {
	const location = useLocation();
	return (
		<Switch location={location}>
			{routes.map(({
				path, exact, Layout, Component
			}) => (
				<Route
					key={path}
					path={path}
					exact={exact}
					render={(props) => (
						<Layout location={location}>
							<Component {...props} />
						</Layout>
					)}
				/>
			))}
		</Switch>
	);
}

export default Routes;
