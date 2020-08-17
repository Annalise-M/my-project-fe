import React from 'react';
import { fetchPosters } from './posters-api.js';
import { Link } from 'react-router-dom';


class ListPage extends React.Component {
    state = {
        posters: []
    }
    

    componentDidMount = async () => {
        const data = await fetchPosters()

        this.setState({
            posters: data.body
        })
    }

    render() {
        return (
            // <div className="sidebar">
            //     <Link to='/'>List</Link>
            //     <Link to='/create'>Create</Link>
            //     <Link to='/detail/:id'>Detail</Link>
            // </div>
                <div className="posters">
                    <header className="App-header">
                        <h2>Posters:</h2>
                        {
                            this.state.posters.map((poster) => { 
                                return <Link className="poster" to={`/detail/${poster.id}`} key={`${poster.id}-${poster.name}-${poster.description}-${poster.in_stock}-${poster.category}-${poster.price}`}>
                                    <p>Name: {poster.name}</p>
                                    <p>Description: {poster.description}</p>
                                    <p>In stock: {poster.in_stock}</p>
                                    <p>Category: {poster.category_year}</p>
                                    <p>Price: {poster.price}</p>
                                </Link>
                            })
                        }
                    </header>
                </div>
        )
    }
}

export default ListPage;

