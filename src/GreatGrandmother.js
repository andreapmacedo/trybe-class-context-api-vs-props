import React, { Component } from 'react';
import Greatmother from './Grandmother'
import MyContext from './MyContext';

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
      money: 1000000,
    }
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney(){
    this.setState((prevState) => (
      { money: prevState.money - 1000 }
    ));    
  }

  render() {
    const contextValue ={
      money: this.state.money,
      spendMoney: this.handleSpendMoney,
    }
    return (
      <MyContext.Provider value={contextValue}>
        <div>
          <h1>Eu sou a bisavó</h1>
          <Greatmother money={ this.state.money}  handleSpendMoney={this.handleSpendMoney}/>
        </div>
      </MyContext.Provider>
    );
  }
}

export default GreatGrandfather;