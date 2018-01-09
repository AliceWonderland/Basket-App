import React from 'react';
import PropTypes from 'prop-types';

const BasketItem = ({ onClick, bought, name }) => (
  <li
	onClick={onClick}
	style={ {
		textDecoration: bought ? 'line-through' : 'none'
	}}
  >
	  {name}
  </li>
);

BasketItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	bought: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired
};

export default BasketItem;