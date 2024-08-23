import React from 'react'
import { RotatingLines } from "react-loader-spinner";

const Spinner = () => {

  return (
    <div>
        <RotatingLines
            strokeColor="#b0c4de"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
    </div>
  )
}

export default Spinner