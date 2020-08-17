import React, { Component } from 'react';
import { fetchPoster, deletePoster, updatePoster, fetchCategories } from './posters-api.js';


export default class DetailPage extends Component {
    state = {
        poster: {},
        name: '',
        description: '',
        in_stock: true,
        category_id: 1,
        categories: [],
        price: 12.00
    }


    componentDidMount = async () => {
        const data = await fetchPoster(this.props.match.params.id)
        const categoriesData = await fetchCategories();
        
        const matchingCategory = categoriesData.body.find(category => category.year = data.body.categories_year);

        this.setState({
            poster: data.body,
            name: data.body.name,
            description: data.body.description,
            in_stock: data.body.in_stock,
            category: matchingCategory.id,
            categories: categoriesData.body,
            price: data.body.price 
        })
    }
    
    
    handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await updatePoster(
                this.props.match.params.id,
                {
                    name: this.state.name,
                    description: this.state.description,
                    in_stock: this.state.in_stock,
                    category_id: this.state.category_id,
                    price: this.state.price 
                });
                
                const updatedPoster = await fetchPoster(this.props.match.params.id)
                
                this.setState({
                    name: '',
                    description: '',
                    in_stock: true,
                    category_id: 1,
                    poster: updatedPoster.body,
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
        handleIn_StockChange = e => {
            this.setState({ in_stock: e.target.value });
        }
        
        
        handleCategoryChange = e => {
            this.setState({ category_year: e.target.value });
        }
        
        handlePriceChange = e => {
            this.setState({ price: e.target.value });
        }
        
        handleDelete = async () => {
            await deletePoster(this.props.match.params.id);
            
            this.props.history.push('/');
        }
        
        
        render() {
            console.log(this.state.poster);
            return (
                <div>
                <div>
                    Here's your sick ass poster from {this.state.poster.categories_year} Burning Man!
                    {/* more poster info here */}
                </div>
                <h3>Update this poster?</h3>
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
                                this.state.categories.map((category) => <option value={category.id} key={category.id}>{category.year}</option> )
                            }
                            </select>
                        </label>
                        <label>
                            Price: 
                            <input onChange={this.handlePriceChange} type="number" value={this.state.price} />
                        </label>
                    </form>

                    <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

