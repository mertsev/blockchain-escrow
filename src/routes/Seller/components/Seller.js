import React from 'react'
import PropTypes from 'prop-types'
import 'web3'
import 'ethjs'

var addr;
var code = '60606040525b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060023481151561005257fe5b046000819055503460005460020214151561006c57600080fd5b5b5b6106588061007d6000396000f30060606040523615610081576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806308551a531461008657806335a063b4146100db5780633fa4f245146100f05780637150d8ae1461011957806373fac6f01461016e578063c19d93fb14610183578063d6960697146101ba575b600080fd5b341561009157600080fd5b6100996101c4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100e657600080fd5b6100ee6101ea565b005b34156100fb57600080fd5b610103610349565b6040518082815260200191505060405180910390f35b341561012457600080fd5b61012c61034f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561017957600080fd5b610181610375565b005b341561018e57600080fd5b610196610538565b604051808260028111156101a657fe5b60ff16815260200191505060405180910390f35b6101c261054b565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561024657600080fd5b600080600281111561025457fe5b600260149054906101000a900460ff16600281111561026f57fe5b14151561027b57600080fd5b7f72c874aeff0b183a56e2b79c71b46e1aed4dee5e09862134b8821ba2fddbf8bf60405160405180910390a160028060146101000a81548160ff021916908360028111156102c557fe5b0217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050151561034357600080fd5b5b5b505b565b60005481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103d157600080fd5b60018060028111156103df57fe5b600260149054906101000a900460ff1660028111156103fa57fe5b14151561040657600080fd5b7fe89152acd703c9d8c7d28829d443260b411454d45394e7995815140c8cbcbcf760405160405180910390a160028060146101000a81548160ff0219169083600281111561045057fe5b0217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f1935050505015156104b957600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050151561053257600080fd5b5b5b505b565b600260149054906101000a900460ff1681565b600080600281111561055957fe5b600260149054906101000a900460ff16600281111561057457fe5b14151561058057600080fd5b600054600202341480151561059457600080fd5b7fd5d55c8a68912e9a110618df8d5e2e83b8d83211c57a8ddd1203df92885dc88160405160405180910390a133600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260146101000a81548160ff0219169083600281111561062057fe5b02179055505b5b505b505600a165627a7a72305820c758830edfe278673683f565da906319f11529bc52c778c51e572d6c4a3a1d480029'
var data;
var curr;
var fields = [{title: 'title',data: 'data'},{title: 'title1',data: 'data2'},{title: 'title2',data: 'data2'},{title: 'title3',data: 'data2'}];


export const Seller = React.createClass({
  getInitialState: function () {
    alert('render')
    return { value: 'Здарова!',
    fields: fields }
  },

  handleLabelFocus: function (event) {
    this.setState({ value: event.target.value })
  },

  handleLabelChange: function (event, field) {
      var newFields = this.state.fields.slice()
      console.log('newFields')
      console.log(newFields)
      console.log('field')
      console.log(field)
      var index = this.state.fields.indexOf(field)
      console.log('index')
      console.log(index)
      index >= 0 ?
      newFields[index].title = event.target.value :
      newFields[newFields.length-1].title = event.target.value
      this.setState({ fields: newFields })
      console.log('this.state.fields')
      console.log(this.state.fields)
  },

  handleDataFocus:function (event) {
    this.setState({ value: event.target.value })
  },

  handleDataChange: function (event, field) {
      var newFields = this.state.fields.slice()
      console.log('newFields')
      console.log(newFields)
      console.log('field')
      console.log(field)
      var index = this.state.fields.indexOf(field)
      console.log('index')
      console.log(index)
      index >= 0 ?
      newFields[index].data = event.target.value :
      newFields[newFields.length-1].data = event.target.value
      this.setState({ fields: newFields })
      console.log('this.state.fields')
      console.log(this.state.fields)

  },

  handleSubmit: function () {
    console.log(this.state.fields)
    var obj = {}
    this.state.fields.map((data) => {
    obj[data.title] = data.data;
  });

  console.log(obj)
  },
  onClick: function () {
    console.log(this.state);
    this.state.fields[this.state.fields.length-1].title != 'Название' ? 
    this.setState({ 
      fields: this.state.fields.concat({title: 'Название', data: 'Содержимое'})
    }) : console.log('missing click');


  },
  componentWillMount: function () {

    window.addEventListener('load', function () {
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
      var button = document.querySelector('.btn')
      button.addEventListener('click', function () {

        initContract(contract)
      })
    }
    const abi = [{"constant":true,"inputs":[],"name":"seller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"abort","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"value","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"confirmReceived","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"confirmPurchase","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"Aborted","type":"event"},{"anonymous":false,"inputs":[],"name":"PurchaseConfirmed","type":"event"},{"anonymous":false,"inputs":[],"name":"ItemReceived","type":"event"}]

    const contractAddress = '0x441816031aA3Fd5A5ce110f1799F58F44947Cb26'
    const buyer = '0xa11d803e39e9c4667c77b48805c059c86cac2d0d'
    const seller = '0xC88bc39b106B119FE06523Efc78060068fA7F09A'

    function initContract (contract) {
      var _value = prompt('Введите сумму оплаты контракта суммированную с товаром')
      var contractAbi = web3.eth.contract(abi)
      var contractInstance = contractAbi.new({from:seller, data:code, value: _value}, function (err, txHash) {
        if(!err) {
      if(!contractAbi.address) {
        console.log("Contract transaction send: TransactionHash: " + contractAbi.transactionHash + " waiting to be mined...");

      } else {
        console.log("Contract mined! Address: " + contractAbi.address);
        console.log(contractAbi);
      }

    }})
      listenForClicks(contractInstance)
    }

    async function waitForTxToBeMined (txHash) {
  let txReceipt
  while (!txReceipt) {
    try {
      txReceipt = await eth.getTransactionReceipt(txHash)
    } catch (err) {
      return indicateFailure(err)
    }
  }
  indicateSuccess()
}


    function listenForClicks (contractInstance) {
      var abort = document.getElementById('abort')
      const provider = web3.eth.coinbase
         abort.addEventListener('click', function () {
          contractInstance.abort({from:provider},function(error, result){
    if(!error)
        console.log(result)
    else
        console.error(error);
})

      })

    }
  },
  

  

  render: function () {
  const listItems = this.state.fields.map((field) =>
  <div className='row'>
    <input 
      className='form-control col-sm-4' 
      key={fields.indexOf(field)+'title'} 
      placeholder={field.title} 
      onFocus={this.onClick}
      onChange={(event) => this.handleLabelChange(event, field)}
    />
    <input 
      className='form-control col-sm-8' 
      key={fields.indexOf(field)+'data'} 
      placeholder={field.data} 
      onFocus={this.onClick}
      onChange={(event) => this.handleDataChange(event, field)}
    />
  </div>

  );
    return (
      <div style={{ margin: '0 auto' }} >
        <div className='row'>
          <div className='container'>
            {listItems}
          </div>
          <div className='btn'onClick={this.handleSubmit}>
            Sohranit'
            </div>
        </div>
        <div className='form-group'>
          <label htmlFor='usr'>Действия:</label>

          <button className='btn'> Запустить контракт</button>

          <button className='btn' id="abort"> Отменить сделку</button>

          <div>
          </div>
        </div>
      </div>
    )
  }
}
)

export default Seller
