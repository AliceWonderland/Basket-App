import { connect } from 'react-redux';
import { toggleBasketItem, clearBasketItems } from './actions';
import BasketList from './BasketList';

const getBasketList = (basketItems, filter) => {
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
	return {
		basketItems: getBasketList(state.basketItems.list, state.visibilityFilter)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleBasketItem(id))
		},
		onClearClick: () => {
			dispatch(clearBasketItems())
		}
	}
};

const BasketListLive = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketList);

export default BasketListLive;