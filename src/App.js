	// import React, { Component } from 'react';
	// import logo from './logo.svg';
	//


import React, { Component } from 'react';
import Footer from './Footer'
import AddBasketItem from './AddBasketItem'
import VisibleTodoList from './VisibleTodoList'

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
			categories: [
				{id:1, name:'Fruit'},
				{id:2, name:'Vegetable'},
				{id:3, name:'Dairy'},
				{id:4, name:'Meat'},
				{id:5, name:'Grain'}
			],

			item: [
				{id:1, name:'Strawberry', categoryId:1},
				{id:2, name:'Blueberry', categoryId:1},
				{id:3, name:'Orange', categoryId:1},
				{id:4, name:'Banana', categoryId:1},
				{id:5, name:'Apple', categoryId:1},

				{id:6, name:'Carrot', categoryId:2},
				{id:7, name:'Celery', categoryId:2},
				{id:8, name:'Mushroom', categoryId:2},
				{id:9, name:'Green Pepper', categoryId:2},

				{id:10, name:'Eggs', categoryId:3},
				{id:11, name:'Cheese', categoryId:3},
				{id:12, name:'Butter', categoryId:3},

				{id:13, name:'Chicken', categoryId:4},
				{id:14, name:'Beef', categoryId:4},
				{id:15, name:'Pork', categoryId:4},
				{id:16, name:'Fish', categoryId:4},

				{id:17, name:'Rice', categoryId:5},
				{id:18, name:'Pasta', categoryId:5},
				{id:19, name:'Bread', categoryId:5}
			],

			list: [
				{id:1, name:'Strawberry', count:1, bought:false},
				{id:6, name:'Carrot', count:1, bought:false},
				{id:10, name:'Eggs', count:1, bought:false},
				{id:13, name:'Chicken', count:1, bought:false},
				{id:17, name:'Rice', count:1, bought:false}
			]
        };

		this.addToBasket = this.addToBasket.bind(this);
    }

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	addToBasket(e) {
		const itemToAdd = e.target;
		const list = this.state.list;

		for(let item in list){
			//using == to ignore type
			if(list[item].id == itemToAdd.id){
				list[item].count++
			}
		}

		console.log(list.hasOwnProperty('id'), itemToAdd.id, e.target.name);

		let newItem = {id: itemToAdd.id, name: itemToAdd.name, count:1, bought:false};
		this.setState({ list: [...this.state.list, newItem]});

		console.log(itemToAdd, this.state.list);
	}

    render() {
		// const categories = this.state.categories;
		// const items = this.state.item;
		// const list = this.state.list;
        return (
            <div className="App">

				<div>
					<AddBasketItem />
					<VisibleTodoList />
					<Footer />
				</div>


                <header className="App-header">
					<i className="fa fa-shopping-basket fa-6" aria-hidden="true"></i>
                    <h1 className="App-title">Hello, Basket!</h1>
                </header>
				<nav>
					<form><input type="text" name="filterIt" value="filter for e.g. Apple" /></form>
				</nav>
                {/*<main>*/}
                    {/*<div>*/}
                        {/*<h3>Groceries</h3>*/}
                        {/*<ul className="Groceries">*/}
							{/*{*/}
								{/*items.map(item => {*/}
									{/*return (*/}

                                      {/*<li key={item.id} id={item.id} name={item.name} onClick={this.addToBasket}>{item.name}</li>*/}

									{/*);*/}
								{/*})*/}
							{/*}*/}
                        {/*</ul>*/}
                    {/*</div>*/}

                    {/*<div>*/}
                        {/*<h3>Basket</h3>*/}
                        {/*<ul className="Basket">*/}
							{/*{*/}
								{/*list.map(item => {*/}
									{/*return (*/}

                                      {/*<li key={item.id} id={item.id} name={item.name}>{item.count} {item.name}</li>*/}

									{/*);*/}
								{/*})*/}
							{/*}*/}
                        {/*</ul>*/}
                    {/*</div>*/}

                {/*</main>*/}
            </div>
        );
    }
}

export default App;




	// const App = () => (
	//   <div>
	// 	  <AddTodo />
	// 	  <div>
	// 		  <VisibleTodoList />
	// 		  <VisibleTodoList />
	// 	  </div>
	// 	  <Footer />
	//   </div>
	// )
	//
	// export default App
