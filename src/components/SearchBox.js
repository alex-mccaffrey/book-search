import React, { Component } from 'react'

export class SearchBox extends Component {


    updateSearchTerm = (e) => {
        this.props.change(e.target.value)
    }

    onSubmit = (e) => {
        this.updateSearchTerm()

    }

    render() {
        return (
            <form>
                <h2>Search</h2>
                <input
                    type="text"
                    id="Book-Search"
                    placeholder="Book Search"
                    value={this.props.search}
                    onChange={this.updateSearchTerm} />
                <button
                    type='submit'
                    id='submit'
                    value='submit'
                    onClick={this.updateSearchTerm}>Search</button>
            </form>
        )
    }
}

/*<button
type='submit'
id='submit'
value='submit'
onClick={this.onSubmit}>Search</button>*/

export default SearchBox
