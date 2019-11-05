import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: {}
    };
  }

  testAPI = async () => {
    const res = await axios.get("/api/");
    this.setState({
      test: res.data
    });
  };

  componentDidMount() {
    this.testAPI();
  }

  render() {
    const { test } = this.state;
    return <div>{test.test}</div>;
  }
}
