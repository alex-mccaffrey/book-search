import React, { Component } from 'react'

export class Filters extends Component {
    render() {
        return (
            <form>
                <label>Print Type: </label>
                <select name="printType" id="printType" value={this.props.printType} onChange={(e) => this.setState({printType: e.target.value})}>
                <option>All</option>
                <option>Book</option>
                <option>Magazine</option>
                </select>

                <label>Book Type: </label>
                <select name="bookType" id="bookType">
                <option>eBook</option>
                <option>Paper</option>
                </select>
            </form>
        )
    }
}

export default Filters
