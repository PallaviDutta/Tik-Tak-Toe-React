import React, { Component } from "react";
import Player from "./choosePlayer";

class Status extends Component {
  handleSetPlayer(e) {
    this.props.setPlayer(e);
  }
  renderHtml() {
    if (this.props.winner) {
      return <h2>Winner is {this.props.winner}</h2>;
    } else {
      return this.props.player ? (
        <h2>Chance of player {this.props.player}</h2>
      ) : (
        <Player player={(e) => this.handleSetPlayer(e)} />
      );
    }
  }
  render() {
    return <span>{this.renderHtml()}</span>;
  }
}

export default Status;

// import React, { Component } from "react";
// import Player from "./choosePlayer";
// import Counter from "./Counter";
// import Counter2 from "./Counter2";

// class Status extends Component {
//   handleSetPlayer(e) {
//     this.props.setPlayer(e);
//   }
//   renderHtml() {
//     console.log("*******");
//     console.log(this.props.count);
//     console.log("*******");

//     if (this.props.winner) {
//       return <h2>Winner is {this.props.winner}</h2>;
//     } else {
//       return this.props.player ? (
//         <div>
//           <h2>Next player is {this.props.player}</h2>
//           {this.props.player === "X" ? (
//             <Counter counter={this.props.count} />
//           ) : (
//             <Counter2 counter={this.props.count} />
//           )}
//         </div>
//       ) : (
//         <Player player={(e) => this.handleSetPlayer(e)} />
//       );
//     }
//   }
//   render() {
//     return <span>{this.renderHtml()}</span>;
//   }
// }

// export default Status;
