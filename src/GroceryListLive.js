import { connect } from 'react-redux';
import { addBasketItem } from './actions';
import GroceryList from './GroceryList';

const getGroceryList = (groceryItems, filter) => {
	switch (filter) {
		case 'SHOW_COMPLETED':
			return groceryItems.filter(t => t.bought);
		case 'SHOW_ACTIVE':
			return groceryItems.filter(t => !t.bought);
		case 'SHOW_ALL':
		default:
			return groceryItems;
	}
};

const mapStateToProps = state => {
	console.log('glist',state);
	return {
		groceryItems: getGroceryList(state.basketItems.item, state.visibilityFilter)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(addBasketItem(id))
		}
	}
};

const GroceryListLive = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList);

export default GroceryListLive;