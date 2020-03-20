import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
        this.onInputChange = this.onInputChange.bind(this);

    }

    onInputChange(term) {
        this.setState({term: term.target.value});
        this.props.onTermChange(term.target.value);
    }

    render() {
        return (
            <div className="search">
                <input onChange={this.onInputChange} />
            </div>
        );
    }
}

export default SearchBar;