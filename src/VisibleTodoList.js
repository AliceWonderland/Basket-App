import { connect } from 'react-redux';
import { toggleBasketItem } from './actions';
import BasketList from './BasketList';

const getVisibleTodos = (basketItems, filter) => {
	switch (filter) {
		case 'SHOW_COMPLETED':
			return basketItems.filter(t => t.bought);
		case 'SHOW_ACTIVE':
			return basketItems.filter(t => !t.bought);
		case 'SHOW_ALL':
		default:
			return basketItems;
	}
};

const mapStateToProps = state => {
	console.log('test',state.basketItems.list);
	return {
		basketItems: getVisibleTodos(state.basketItems.list, state.visibilityFilter)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleBasketItem(id))
		}
	}
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketList);

export default VisibleTodoList;