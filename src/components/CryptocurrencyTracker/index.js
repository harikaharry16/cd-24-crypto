import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)

    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
      id: each.id,
    }))

    this.setState({cryptoData: updatedData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="white" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoData={cryptoData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
