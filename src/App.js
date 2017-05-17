import React, { Component } from 'react';
// import logo from './logo.svg';
// import { get } from 'axios';
import './App.css';
const data = require('../Quotes.json')

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quoteData: [],
      quote: "",
      name: "",
      selectedQuote: null,
    }

    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    // get(`../quotes.json`)
    //   .then(({ data: quoteData }) => {
    //     console.log(quoteData.split("\n"));
    //     this.setState({ quoteData });
    //     console.log(typeof quoteData);
    //   });
    this.setState({
      quoteData: data,
    });
  }

  handleClick(e) {
    const quoteIndex = Math.floor(Math.random() * 101);

    this.setState({
      quote: data[quoteIndex].quote,
      name: data[quoteIndex].name,
      selectedQuote: quoteIndex,
    })

  }

  render() {
    const { quote, name } = this.state;
    return (
      <div className="App">
        <Quote quote={quote} name={name} />
        <button className="btn" onClick={this.handleClick}>Get quote</button>
      </div>

    );
  }
}

const Quote = ({ quote, name }) => (
  <div className="quote">
    {quote}
    {name}
  </div>
)


export default App;
