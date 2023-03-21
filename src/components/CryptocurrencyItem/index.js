// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {eachCrypto} = props
  const {currencyName, usdValue, euroValue, currencyLogo, id} = eachCrypto

  return (
    <li className="rupee-container">
      <div className="left-logo-name">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="type">{currencyName}</p>
      </div>
      <div className="r-usd-euro">
        <p className="type">{usdValue}</p>
        <p className="type">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
