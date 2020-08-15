import React, { Component } from 'react';
import { fetchPoster } from './posters-api.js';

export default class DetailPage extends Component {
    state = {
        posters: {}
    }

    componentDidMount = async () => {
        const data = await fetchPoster(this.props.match.params.id)
        
        this.setState({
            poster: data.body
        })
    }

    render() {
        return (
            <div>
                Here's your sick ass poster! 
                {poster.name}
                {/* need to add more components...? which ones for rendering on detail page? */}
            </div>
        )
    }
}
