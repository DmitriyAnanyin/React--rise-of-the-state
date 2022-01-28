
function tryConvert(temperature, convert) {
  let output = null
  const input = parseFloat(temperature)
  
  if (Number.isNaN(input)) return ''
  if (convert === 'toCelsius') output = toCelsius(input)
  if (convert === 'toFahrenheit') output = toFahrenheit(input)
  
  const rounded = Math.round(output)

  return rounded.toString()
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}

export default tryConvert