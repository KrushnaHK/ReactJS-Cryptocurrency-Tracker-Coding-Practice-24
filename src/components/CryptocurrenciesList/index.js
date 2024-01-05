// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-uro_values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">Euro</p>
      </div>
    </div>
  )

  renderCryptocurrenciesViews = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="cryptocurrencies-list-container">
        {this.renderCryptocurrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
        />
        {this.renderCryptocurrenciesViews()}
      </div>
    )
  }
}

export default CryptocurrenciesList
