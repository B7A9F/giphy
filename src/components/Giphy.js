import React from 'react';
import GifList from './GifList';
import SearchBar from './SearchBar';
import request from 'superagent';
import '../styles/app.css';

export default class Giphy extends React.Component {
    constructor() {
        super();

        this.state = {
            gifs: []
        }

    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=zUB4s1MAI4e44eDFB4baMW6WT9PRCclM')
        .then(res => res.json())
        .then((data) => {
            console.log('data: ', data);
            console.log(data)
          this.setState({ gifs: data.data })
        })
        .catch(console.log)
      }

    handleTermChange = (term) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=zUB4s1MAI4e44eDFB4baMW6WT9PRCclM`;

        request.get(url).then((res) => {
            this.setState({ gifs: res.body.data })
        });
    }

    render() {
        console.log(this.state.gifs);
        return (
            <div>
                <SearchBar onTermChange={this.handleTermChange} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}
