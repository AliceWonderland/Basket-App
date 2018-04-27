import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ onClick, bought, name, count }) => (
  <li
	onClick={onClick}
	style={ { textDecoration: bought ? 'line-through' : 'none' }}
  >
	  {count} {name}
  </li>
);

ListItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	bought: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired
};

export default ListItem;