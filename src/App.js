import React, { Component } from 'react';
// import logo from './logo.svg';
// import { get } from 'axios';
import './App.css';
import $ from 'jquery';
// import jsonp from 'jsonp';
// import fetchJsonp from 'fetch-jsonp';
// require('promise/polyfill-done');
// const data = require('../Quotes.json')

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // quoteData: [],
      quote: "",
      name: "",
      // selectedQuote: null,
    }

    this.getQuote = this.getQuote.bind(this);
    this.tweet = this.tweet.bind(this);

  }

  // componentDidMount() {
  // this.setState({
  //   quoteData: data,
  // });
  // }

  // handleClick(e) {
  //   const quoteIndex = Math.floor(Math.random() * 101);
  //   const { quoteData } = this.state;
  //   this.setState({
  //     quote: quoteData[quoteIndex].quote,
  //     name: quoteData[quoteIndex].name,
  //     selectedQuote: quoteIndex,
  //   })

  // }

  getQuote() {
    // fetchJsonp("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?"), null, function (err, data) {
    //   if (err) {
    //     console.error(err.message);
    //   } else {
    //     console.log(data);
    //   }
    // };
    const _this = this;
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function (data) {
      // console.log(data);
      _this.setState({
        quote: data.quoteText,
        name: data.quoteAuthor,
      });
    });
    // jsonp('https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', null, function (err, data) {
    //   if (err) {
    //     console.error(err.message);
    //   } else {
    //     console.log(data);
    //   }
    // });
  }

  tweet() {
    const { quote, name } = this.state;
    const textToTweet = quote + ' --' + name;
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(textToTweet), '_blank')
  }

  render() {
    const { quote, name } = this.state;
    return (
      <div className="App">
        <Quote quote={quote} name={name} />
        <button className="btn" onClick={this.getQuote}>Get quote</button>
        <button className="btn" onClick={this.tweet}>Tweet</button>
      </div>

    );
  }
}

const Quote = ({ quote, name }) => (
  <div className="quote">
    <p>{quote}</p>
    <p>{name}</p>

  </div>
)


export default App;
