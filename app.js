import React from 'react';
import { fetchPosters } from './poster-api.js';
import './App.css';


class App extends React.Component {
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
            <div className="App">
                <header className="App-header">
                    <h2>Posters:</h2>
                    {
                        this.state.posters.map((poster) =>{ return 
                            <div>
                                {poster.name} : {poster.description} : {poster.in_stock} : {poster.category} : {poster.price}
                            </div>
                        })
                    }
                </header>
            </div>
        )
    }
}

