import React from "react";

class Counter1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.count > 0) {
        this.setState({
          count: this.state.count - 1,
        });
      }
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <h1>Time Left: {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter1;
