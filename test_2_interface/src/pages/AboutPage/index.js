import { connect } from 'react-redux';
import { reset } from '../../redux/actions/AboutPage';
import AboutPage from './AboutPage';

const mapsStateToProps = (state) => ({
	pageProps: state.AboutPage
});

const mapsDispatchToProps = (dispatch) => ({
	reset() {
		dispatch(reset());
	}
});

export default connect(
	mapsStateToProps,
	mapsDispatchToProps
)(AboutPage);
