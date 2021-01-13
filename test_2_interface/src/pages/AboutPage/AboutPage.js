/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

function AboutPage(props) {
	useEffect(() => () => {
		props.reset();
	}, []);

	return (
		<section>
			<div className="container max-w-7xl mx-auto px-8">
				<h1 className="text-2xl font-bold">About Page</h1>
			</div>
		</section>
	);
}

AboutPage.propTypes = {
	// pageProps: PropTypes.shape.isRequired,
	reset: PropTypes.func.isRequired
};

export default AboutPage;
