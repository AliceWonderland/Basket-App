let nextTodoId = 0;
export const addBasketItem = item => {
	return {
		type: 'ADD_BASKETITEM',
		item
	}
};

export const addCustomBasketItem = name => {
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

export const clearBasketItems = id => {
	return {
		type: 'CLEAR_BASKETITEMS',
		id
	}
};

export const setVisibilityFilter = filter => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
};

// export default { addBasketItem, toggleBasketItem, clearBasketItems, setVisibilityFilter };
