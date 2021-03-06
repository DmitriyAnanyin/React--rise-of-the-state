import React from 'react';

const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта',
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render () {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Введите температуру в градусах {scaleNames[scale]}: </legend>
          <input
            value={temperature}
            onChange={(e) => this.handleChange(e)}
          />
      </fieldset>
    )
  }
}

export default TemperatureInput