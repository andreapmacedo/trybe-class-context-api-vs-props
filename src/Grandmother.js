import React, { Component } from 'react';
import Father from './Father'

class Grandmother extends Component {
  // state = {
  //   inheritance: 1000000,
  // }

  render() {
    return (
      <div>
        <h2>Eu sou a vó</h2>
        <Father money={ this.props.money} handleSpendMoney={this.props.handleSpendMoney} />
      </div>
      // <Grandmother inheritance={this.state.inheritance} />
    );
  }
}

export default Grandmother;

// function Grandmother(props) {
//   return (
//     <Father inheritance={props.inheritance} />
//   );
// }

// function Father(props) {
//   return (
//     <Daughter inheritance={props.inheritance} />
//   );
// }

// function Daughter(props) {
//   return (
//     <div>
//       <span>
//         {`Tenho uma herança de R$ ${props.inheritance} que recebi do meu bisavô`}
//       </span>
//     </div>
//   );
// }