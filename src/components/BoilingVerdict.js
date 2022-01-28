import React from "react"

function BoilingVerdict(props) {
  if (props.celsius >= 100)  
    return <p>Вода закипит.</p>
  else 
    return <p>Вода не закипит.</p>
}

export default BoilingVerdict