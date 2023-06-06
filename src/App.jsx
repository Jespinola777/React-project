import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ done: true });
  };

  handleMouseLeave = () => {
    this.setState({ done: false });
  };

  render() {
    const { done } = this.state;
    const listItemStyle = {
      fontWeight: done ? "bold" : "normal",
    };

    return (
      <li
        style={listItemStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.item}
      </li>
    );
  }
}

const App = (props) => (
  <ul>
    {props.items.map((item, index) => (
      <GroceryListItem item={item} key={index} />
    ))}
  </ul>
);

export default App;
