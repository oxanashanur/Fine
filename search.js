import React, { Component } from "react";

import "./search.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://test-task.shtrafovnet.com/fines/0356043010119111100023005"
    ).then((res) =>
      res.json().then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.number,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      )
    );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p> Error {error.message} </p>;
    } else if (!isLoaded) {
      return <p> Loading... </p>;
    } else {
      return (
        <div>
          {items.map((item) => (
            <p key={item.name}>{item.bill_at}</p>
          ))}
        </div>
      );
    }
  }
}
