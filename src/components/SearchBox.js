import React, { Component } from 'react'

export class SearchBox extends Component {
    render() {
        return (
            <form>
                <h2>Search</h2>
                <input
                    type="text"
                    id="Book-Search"
                    placeholder="Book Search"
                    value={this.props.search}
                    onChange={e => this.props({ search: e.target.value })} />
                <button
                    type='submit'
                    id='search'
                    value='search'
                    onClick={e => this.searchChanged(e.target.value)}>Search</button>
            </form>
        )
    }
}

export default SearchBox
