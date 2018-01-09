import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <footer>
	  <div>
		  <FilterLink filter="SHOW_ALL">All</FilterLink>
		  {', '}
		  <FilterLink filter="SHOW_ACTIVE">Pending</FilterLink>
		  {', '}
		  <FilterLink filter="SHOW_COMPLETED">Purchased</FilterLink>
	  </div>
  </footer>
);

export default Footer;