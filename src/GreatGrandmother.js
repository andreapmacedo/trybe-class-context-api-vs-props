import React, { Component } from 'react';
import Greatmother from './Grandmother'

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
      money: 1000000,
    }
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
    // this.spendInheritance = this.spendInheritance.bind(this);
  }

  handleSpendMoney(){
    this.setState((prevState) => (
      { money: prevState.money - 1000 }
    ));    
  }

  // spendInheritance() {
  //   this.setState((prevState) => (
  //     { inheritance: prevState.inheritance - 1000 }
  //   ));
  // }

  render() {
    return (
      <div>
        <h1>Eu sou a bisavó</h1>
        <Greatmother money={ this.state.money}  handleSpendMoney={this.handleSpendMoney}/>
      </div>
    );
  }
}

export default GreatGrandfather;