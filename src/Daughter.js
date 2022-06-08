import React, { Component } from 'react';

class Daughter extends Component {
  render() {
    return (
      <div>
        <h2>Eu sou a filha</h2>
        <p>{`Eu tenho ${this.props.money} pra gastar`}</p>
        <button
          type='button'
          onClick={this.props.handleSpendMoney}
        >
          gastar
        </button>
      </div>
    );
  }
}

export default Daughter;