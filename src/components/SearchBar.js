import React from 'react';
import _ from 'lodash';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
        this.onInputChange = this.onInputChange.bind(this);

    }

    onInputChange(event) {
        event.persist();
        if (!this.debouncedFn) {
            this.debouncedFn =  _.debounce(() => {
                this.setState({term: event.target.value});
                this.props.onTermChange(event.target.value);
            }, 500);
          }
          this.debouncedFn();
        
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