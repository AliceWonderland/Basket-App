import React, { Component } from 'react';
import Footer from './Footer';
import GroceryListLive from './GroceryListLive';
import BasketListLive from './BasketListLive';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">

				<header className="App-header">
					<i className="fa fa-shopping-basket fa-6" aria-hidden="true"></i>
					<h1 className="App-title">Hello, Basket!</h1>
				</header>

				<nav>
					<form>
						<input type="text" name="filterIt" defaultValue="filter for e.g. Apple onChange (not implemented)" onChange={this.addToBasket} />
					</form>
				</nav>

                <main>
					<GroceryListLive />
					<BasketListLive />
                </main>

				<Footer />

            </div>
        );
    }
}

export default App;