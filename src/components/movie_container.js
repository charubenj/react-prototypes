import React, {Component} from 'react';
import Movie from './movies';
import axios from 'axios';

class MoviesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount() {


        const url = "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json"
        axios.get(url).then((resp) => {
            this.setState({
                movies: resp.data.feed.entry
            })

        });

    }

    render() {
        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movie info={movieInfo} key={index}/>;
        });

        return (
            <div>
                {movieList}
            </div>
        )

    }
}

export default MoviesContainer;