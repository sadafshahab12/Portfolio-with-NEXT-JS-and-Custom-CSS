import React from 'react'
import "../../globals.css"
interface Text {
    btnText : string,
}
const Button = ({btnText}: Text) => {
  return (
    <div>
        <button className='btn btn-color'>{btnText}</button>
    </div>
  )
}

export default Button
