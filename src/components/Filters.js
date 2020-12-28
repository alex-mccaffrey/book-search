import React, { Component } from 'react'

 class Filters extends Component {
   

    render() {
        return (
            <form>
                <label>Print Type: </label>
                <select name="printType" id="printType"  defaultValue={this.props.selectValue} 
                onChange={this.handleChange} >
                <option value='All'>All</option>
                <option value='Book'>Book</option>
                <option value='Magazine'>Magazine</option>
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
