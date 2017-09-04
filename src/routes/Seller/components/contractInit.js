import React, {Component} from 'react'
import 'web3'
import 'ethjs'
import 'ethjs-contract'

export const Seller = React.createClass ({
  componentWillMount: function () {
    alert('hello')
    window.addEventListener('load', function () {

      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        window.web3 = new web3(web3.currentProvider);
      } else {
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        window.web3 = new web3(new web3.providers.HttpProvider("http://localhost:8545"));
      }

      // Now you can start your app & access web3 freely:
      startApp()

    })
    const Eth = require('ethjs-query')
    const EthContract = require('ethjs-contract')

    function startApp(web3) {
      const eth = new Eth(web3.currentProvider)
      const contract = new EthContract(eth)
    }
  }
}
)

