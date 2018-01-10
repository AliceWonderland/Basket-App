import React from 'react';
import PropTypes from 'prop-types';
import BasketItem from './BasketItem';

const BasketList = ({ basketItems, onTodoClick, onClearClick }) => {
	const isClear = !basketItems.length;

	return (
		<div>
			<header>
				<h3><i className="fa fa-shopping-basket" aria-hidden="true"></i> Basket</h3>
				{
				isClear ?
					<h3> </h3>
					:
					<h3 className="clearBasket" onClick={() => onClearClick()}><i className="fa fa-trash" aria-hidden="true"></i> </h3>
				}
			</header>

			{
				isClear ?
				<ul className="Basket">
					<li>Your basket is empty!</li>
				</ul>
				:
				<ul className="Basket">
					{basketItems.map(listItem => (
						<BasketItem key={listItem.id} {...listItem} onClick={() => onTodoClick(listItem.id)} />
					))}
				</ul>
			}
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
	onTodoClick: PropTypes.func.isRequired,
	onClearClick: PropTypes.func.isRequired
};

export default BasketList;