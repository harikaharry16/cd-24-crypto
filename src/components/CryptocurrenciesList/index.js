// Write your JS code here

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoData} = props

  return (
    <div>
      <h1 className="head">Cryptocurrency Tracker </h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="img-url"
      />
      <div className="crypto-container">
        <div className="top right">
          <h1 className="r-names">Coin </h1>
          <h1 className="r-names">Type</h1>
          <div className="right">
            <h1 className="r-names">USD</h1>
            <h1 className="r-names">EURO</h1>
          </div>
        </div>
        <ul className="list">
          {cryptoData.map(eachData => (
            <CryptocurrencyItem key={eachData.id} eachCrypto={eachData} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
