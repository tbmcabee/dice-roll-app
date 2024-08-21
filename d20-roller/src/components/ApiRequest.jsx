import { React, useState } from 'react'
import OutputTable from './OutputTable';

async function ApiRequest() {
  const [table, onTable] = useState(false)

//   console.log(jsonObject)

  const handleClick = () => {
    onTable(!table)
  }

  return (
    <>

    </>
  )
}

export default ApiRequest