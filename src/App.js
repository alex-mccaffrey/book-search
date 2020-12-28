import React, { Component } from 'react';
import './App.css';

import SearchBox from './components/SearchBox';
import Filters from './components/Filters';
import BookList from './components/BookList';



class App extends Component {
  state = {
    search: " ",
    printType: 'All',
    bookType: null,
    bookList: []
  }

  changeSearch = (term) => {
    this.setState({ search: term })
    this.searchBooks()
  }

  searchBooks = () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`;
    console.log(`the url is ${url}`)
    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ bookList: res.items }));
  };


  componentDidMount() {
    this.searchBooks();
  }


  render() {
    return (
      <div className="App">
        <SearchBox 
        change = {this.changeSearch}
        search={this.state.search}
        submit={this.searchBooks} />
        <Filters
          bookList={this.state.bookList}
          printType={this.state.printType}
          bookType={this.state.bookType} />
        <BookList bookList={this.state.bookList} />
      </div>
    );
  }
}

export default App;
