import React, { Component } from 'react';
import MyContext from './MyContext';

class Daughter extends Component {
  render() {
    return (
      <div>
        <h2>Eu sou a filha</h2>
        <MyContext.Consumer>
          {
            value => (
              <div>
                <p>{`Eu tenho ${value.money} pra gastar`}</p>
                <button
                type='button'
                onClick={value.spendMoney}
              >
                gastar
              </button> 
              </div>
            )
          }
        </MyContext.Consumer>

        {/* <p>{`Eu tenho ${this.props.money} pra gastar`}</p>
        <button
          type='button'
          onClick={this.props.handleSpendMoney}
        >
          gastar
        </button> */}
      </div>
    );
  }
}

export default Daughter;