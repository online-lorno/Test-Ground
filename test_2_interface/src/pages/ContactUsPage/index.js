import { connect } from 'react-redux';
import { reset } from '../../redux/actions/ContactUsPage';
import ContactUsPage from './ContactUsPage';

const mapsStateToProps = (state) => ({
	pageProps: state.ContactUsPage
});

const mapsDispatchToProps = (dispatch) => ({
	reset() {
		dispatch(reset());
	}
});

export default connect(
	mapsStateToProps,
	mapsDispatchToProps
)(ContactUsPage);
