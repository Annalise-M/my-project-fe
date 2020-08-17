import React, { Component } from 'react';
import { createPoster, fetchCategories } from './posters-api.js';
import './App.css';

export default class CreatePage extends Component {
    state = {
        name: '',
        description: '',
        in_stock: true,
        category: 2020,
        price: 12.00
    }

    componentDidMount = async () => {
        const categoriesData = await fetchCategories();

        this.setState({
            categories: categoriesData.body
        })
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createPoster({
                name: '',
                description: '',
                in_stock: true,
                category: 2020,
                price: 12.00
            });

            this.setState({
                name: '',
                description: '',
                in_stock: true,
                category: 2020,
                price: 12.00
            });

        } catch(e) {
            console.log(e.message)
        }
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
        this.setState({ category_year: e.target.value });
    }

    // number
    handlePriceChange = e => {
        this.setState({ price: e.target.value });
    }


    render() {
        return (
            // <div className="sidebar">
            //     <Link to='/'>List</Link>
            //     <Link to='/create'>Create</Link>
            //     <Link to='/detail/:id'>Detail</Link>
            // </div>
                <div className="content">
                    <h2>CREATE YOUR POSTER!</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name: 
                            <input onChange={this.handleNameChange} value={this.state.name} />
                        </label>
                        <label>
                            Description: 
                            <input onChange={this.handleDescriptionChange} value={this.state.description} />
                        </label>
                        <label>
                            In Stock: 
                            <input onChange={this.handleIn_StockChange} type="TRUE" value={this.state.in_stock} />
                        </label>
                        <label>
                            Category: 
                            <select onChange={this.handleCategoryChange} value={this.state.category}>
                                {
                                    this.state.categories.map((category) => <option value={category.id}>{category.year}</option> )
                                }
                            </select>
                        </label>
                        <label>
                            Price: 
                            <input onChange={this.handlePriceChange} type="number" value={this.state.price} />
                        </label>
                        <button>Make Poster!</button>
                    </form>
                </div>
        )
    }
}

