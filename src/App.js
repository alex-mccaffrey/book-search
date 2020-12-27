import React, { Component } from 'react;'
import './App.css';

import SearchBox from './components/SearchBox';
import Filters from './components/Filters';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      printType: 'All',
      bookType: null,
      bookList: []
    }
  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const options = {
      method: 'GET',
      headers: {
        "key": "AIzaSyAPZeJuO041U_sVRHEcBQI8epg3vEBiFkg",
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }


  render() {
    return (
      <div className="App">
        <SearchBox search={this.state.search} />
        <Filters
          printType={this.state.printType}
          bookType={this.state.bookType} />
        <BookList bookList={this.state.bookList}/>
      </div>
    );
  }
}

export default App;
