/* eslint-disable import/prefer-default-export */
import { RESET_CONTACT_US_PAGE } from '../../constants/actionTypes';

export function reset() {
	return async (dispatch) => {
		dispatch({
			type: RESET_CONTACT_US_PAGE
		});
	};
}
