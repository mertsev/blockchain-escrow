import React from 'react'
import PropTypes from 'prop-types'
import 'web3'
import 'ethjs'

export const Seller = React.createClass({
  getInitialState: function () {
    return { value: 'Здарова!' }
  },
  handleChange: function (event) {
    this.setState({ value: event.target.value })
  },

  handleSubmit: function () {
    alert(this.state.value)
  },

  componentWillMount: function () {
    window.addEventListener('load', function () {
      alert('hello')
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== 'undefined') {
        startApp(web3)
// Use Mist/MetaMask's provider
      } else {

      }
    })
    const Eth = require('ethjs-query')
    const EthContract = require('ethjs-contract')

    function startApp (web3) {
      const eth = new Eth(web3.currentProvider)
      const contract = new EthContract(eth)
      initContract(contract)
    }
    const abi = [{
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Purchase",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": true,
      "type": "function"
    }]
    const address = '0xC88bc39b106B119FE06523Efc78060068fA7F09A'
    const toaddr = '0xa11d803e39e9c4667c77b48805c059c86cac2d0d'
    const cAddr = '0xa12C48f8C445f4397b67b3Ac7e8f4432461200BE'

    function initContract (contract) {
      const MiniToken = contract(abi)
      const miniToken = MiniToken.at(cAddr)
      listenForClicks(miniToken)
    }
    function listenForClicks (miniToken) {
      var button = document.querySelector('.btn')

      button.addEventListener('click', function () {
        miniToken.Purchase(address,10)
            .then(function (txHash) {
              console.log('Transaction sent')
              console.dir(txHash)
              waitForTxToBeMined(txHash)
            })
            .catch(console.error)
      })
    }
  },

  render: function () {
    return (

      <div style={{ margin: '0 auto' }} >
        <div className='form-group'>
          <label htmlFor='usr'>Name:</label>
          <input
            className='form-control'
            id='usr'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button className='btn'> Send Money!</button>
        </div>
      </div>
    )
  }
}
)

export default Seller
