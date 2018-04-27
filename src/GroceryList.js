import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const GroceryList = ({ groceryItems, onTodoClick }) => {
	return (
	  <div>
		  <header>
			  <h3><i className="fa fa-leaf" aria-hidden="true"></i> Groceries</h3>
		  </header>
		  <ul className="Groceries">
			  {groceryItems.map(listItem => (
				<ListItem key={listItem.id} {...listItem} onClick={() => onTodoClick(listItem)} />
			  ))}
		  </ul>
	  </div>
	)};

GroceryList.propTypes = {
	groceryItems: PropTypes.arrayOf(
	  PropTypes.shape({
		  id: PropTypes.number.isRequired,
		  name: PropTypes.string.isRequired,
		  categoryId: PropTypes.number.isRequired
	  }).isRequired
	).isRequired,
	onTodoClick: PropTypes.func.isRequired
};

export default GroceryList;