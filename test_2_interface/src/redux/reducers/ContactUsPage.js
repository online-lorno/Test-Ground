import { RESET_CONTACT_US_PAGE } from '../../constants/actionTypes';

const initialState = {};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case RESET_CONTACT_US_PAGE:
			return {
				...initialState
			};
		default:
			return state;
	}
}
