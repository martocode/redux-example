const SET_LOADING_STATUS = "GLOBAL/LOADING_STATUS";
const SET_INPUT_STATUS = "GLOBAL/INPUT_STATUS";
const SET_FILTER_TYPE = "GLOBAL/FILTER_TYPE";

export default function reducer(state = globalState, action) {
	switch (action.type) {
		case SET_LOADING_STATUS:
			return {
				...state,
				isLoading: action.payload,
			};
		case SET_INPUT_STATUS:
			return {
				...state,
				isInputEmpty: action.payload,
			};
		case SET_FILTER_TYPE:
			return {
				...state,
				filterType: action.payload,
			};
		default:
			return state;
	}
}

export const globalState = {
	isLoading: true,
	isInputEmpty: true,
	filterType: "Title",
};

export const setLoadingStatus = (data) => {
	return { type: SET_LOADING_STATUS, payload: data };
};

export const setinputStatus = (data) => {
	return { type: SET_INPUT_STATUS, payload: data };
};

export const setFilterType = (data) => {
	return { type: SET_FILTER_TYPE, payload: data };
};
