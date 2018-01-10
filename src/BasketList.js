import React from 'react';
import PropTypes from 'prop-types';
import BasketItem from './BasketItem';

const BasketList = ({ basketItems, onTodoClick }) => {
	return (
		<div>
		  <header>
			  <h3>Basket</h3>
			  <h3>Clear</h3>
		  </header>
		  <ul className="Basket">
			  {basketItems.map(listItem => (
				<BasketItem key={listItem.id} {...listItem} onClick={() => onTodoClick(listItem.id)} />
			  ))}
		  </ul>
		</div>
)};

BasketList.propTypes = {
	basketItems: PropTypes.arrayOf(
	  PropTypes.shape({
		  id: PropTypes.number.isRequired,
		  bought: PropTypes.bool.isRequired,
		  name: PropTypes.string.isRequired,
		  count: PropTypes.number.isRequired
	  }).isRequired
	).isRequired,
	onTodoClick: PropTypes.func.isRequired
};

export default BasketList;