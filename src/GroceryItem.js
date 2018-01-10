import React from 'react';
import PropTypes from 'prop-types';

const GroceryItem = ({ onClick, bought, name, count }) => (
  <li
	onClick={onClick}
	style={{ textDecoration: bought ? 'line-through' : 'none' }}
  >
	  {count} {name}
  </li>
);

GroceryItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	bought: PropTypes.bool,
	name: PropTypes.string.isRequired,
	count: PropTypes.number
};

export default GroceryItem;