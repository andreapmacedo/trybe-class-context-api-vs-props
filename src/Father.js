import React, { Component } from 'react';
import Daughter from './Daughter'

class Father extends Component {
  render() {
    return (
      <div>
        <h2>Eu sou o pai</h2>
        <Daughter money={ this.props.money} handleSpendMoney={this.props.handleSpendMoney}/>
      </div>
    );
  }
}

export default Father;