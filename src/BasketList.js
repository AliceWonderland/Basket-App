import React from 'react';
import PropTypes from 'prop-types';
import BasketItem from './BasketItem';

const BasketList = ({ basketItems, onTodoClick }) => (
  <ul>
	  {basketItems.map(listItem => (
		<BasketItem key={listItem.id} {...listItem} onClick={() => onTodoClick(listItem.id)} />
	  ))}
  </ul>
);

BasketList.propTypes = {
	basketItems: PropTypes.arrayOf(
	  PropTypes.shape({
		  id: PropTypes.number.isRequired,
		  bought: PropTypes.bool.isRequired,
		  name: PropTypes.string.isRequired
	  }).isRequired
	).isRequired,
	onTodoClick: PropTypes.func.isRequired
};

export default BasketList;