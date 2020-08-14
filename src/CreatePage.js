import React, { Component } from 'react';
import { createPoster } from './posters-api.js';
import './App.css';

export default class CreatePage extends Component {
    state = {
        name: '',
        description: '',
        in_stock: true,
        category: 2020,
        price: 12.00
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createPoster({
            name: '',
            description: '',
            in_stock: true,
            category: 2020,
            price: 12.00
        })

        this.setState({
            name: '',
            description: '',
            in_stock: true,
            category: 2020,
            price: 12.00
        })
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleDescriptionChange = e => {
        this.setState({ description: e.target.value });
    }

    // boolean 
    handleInStockChange = e => {
        this.setState({ in_stock: e.target.value });
    }

    // number
    handleCategoryChange = e => {
        this.setState({ category: e.target.value });
    }

    // number
    handlePriceChange = e => {
        this.setState({ price: e.target.value });
    }


    render() {
        return (
                <div>
                    <h2>CREATE!</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            name: 
                            <input onChange={this.handleNameChange} value={this.state.name} />
                        </label>
                        <label>
                            description: 
                            <input onChange={this.handleDescriptionChange} value={this.state.description} />
                        </label>
                        <label>
                            in_stock: 
                            <input onChange={this.handleIn_StockChange} type="TRUE" value={this.state.in_stock} />
                        </label>
                        <label>
                            category: 
                            <input onChange={this.handleCategoryChange} type="number" value={this.state.category} />
                        </label>
                        <label>
                            price: 
                            <input onChange={this.handlePriceChange} type="number" value={this.state.price} />
                        </label>
                        <button>Get Poster</button>
                    </form>
                </div>
        )
    }
}
