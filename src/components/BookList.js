import React, { Component } from 'react'

export class BookList extends Component {

    /* <label>Print Type: </label>
    <select name="printType" id="printType">
    {this.props.bookList.map((book) => (
    <option 
    value={book.volumeInfo.printType}
    key={book.id}>{book.volumeInfo.printType}</option>
    ))}
    </select>

    <label>Book Type: </label>
    <select name="bookType" id="bookType">
    {this.props.bookList.map((book) => (
    <option 
    value={book.saleInfo.isEbook}
    key={book.id}>{book.saleInfo.isEbook}</option>
    ))}
    </select>*/

    render() {
        return (
            <ul>
                {this.props.bookList.map((book) => (
                <li
                key={book.id}>
                <h1>{book.volumeInfo.title}</h1>
                <p>Author: {book.volumeInfo.authors}</p>
               <img src={book.volumeInfo.imageLinks.smallThumbnail}></img>
                </li>
                ))}
            </ul>
        )
    }
}

export default BookList
