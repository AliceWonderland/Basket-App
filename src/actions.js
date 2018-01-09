let nextTodoId = 0;
export const addBasketItem = name => {
	return {
		type: 'ADD_BASKETITEM',
		id: nextTodoId++,
		name
	}
};

export const toggleBasketItem = id => {
	return {
		type: 'TOGGLE_BASKETITEM',
		id
	}
};

export const setVisibilityFilter = filter => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
};

