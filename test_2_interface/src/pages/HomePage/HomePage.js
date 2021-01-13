import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

function HomePage(props) {
	useEffect(() => () => {
		props.reset();
	}, []);

	return (
		<section>
			<div className="container max-w-7xl mx-auto px-8">
				<h1 className="text-2xl font-bold">Home Page</h1>
			</div>
		</section>
	);
}

HomePage.propTypes = {
	// pageProps: PropTypes.shape.isRequired,
	reset: PropTypes.func.isRequired
};

export default HomePage;
