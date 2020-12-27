import React, { Component } from 'react'

export class SearchBox extends Component {
    render() {
        return (
            <form>
                <h2>Search</h2>
                <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={this.props.search}/>
            <button
            type='submit'
            id='search'
            value='search'
            onClick={e => this.searchChanged(e.target.value)}
            />
            </form>
        )
    }
}

export default SearchBox
