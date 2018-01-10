import { connect } from 'react-redux';
import { toggleBasketItem } from './actions';
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
	console.log('blist',state);
	return {
		basketItems: getBasketList(state.basketItems.list, state.visibilityFilter)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleBasketItem(id))
		}
	}
};

const BasketListLive = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketList);

export default BasketListLive;