import React from 'react';
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict';
import Convert from './ConvertTemperature';

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {temperature: '', scale: 'c'}
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature})
  }
  
  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature})
  }


  render () {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? Convert(temperature, 'toCelsius') : temperature
    const fahrenheit = scale === 'c' ? Convert(temperature, 'toFahrenheit') : temperature

    return (
      <div>
        <TemperatureInput 
          scale='c'
          temperature={celsius}
          onTemperatureChange={(e) => this.handleCelsiusChange(e)}
        />
        <TemperatureInput 
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={(e) => this.handleFahrenheitChange(e)}
        />
        <BoilingVerdict
          celsius={parseFloat(celsius)}
        />
      </div>
    )
  }
}

export default Calculator