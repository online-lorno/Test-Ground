import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';

function BasicLayout(props) {
	const { children } = props;
	return (
		<>
			<Header />
			<div className="pt-24">
				{children}
			</div>
		</>
	);
}

BasicLayout.propTypes = {
	children: PropTypes.element.isRequired
};

export default BasicLayout;
