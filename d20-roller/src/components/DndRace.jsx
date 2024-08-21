import {React, useState} from 'react'
import NavBar from "./NavBar";
import OutputTable from './OutputTable';

const DndRace = () => {
  const [table, onTable] = useState(false)

  const handleClick = () => {
    onTable(!table)
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center">DnD 5e API Example</h1>
        <NavBar />
        <h2 className="text-center mb-3">Table of 5e Races</h2>
        <div className="text-center mb-5">
            <p>This table was created with data from Open5e API</p>
            <a href="https://open5e.com/api-docs">Open5e API Docs</a>
        </div>
        <div className="row justify-content-center">
            {!table &&(
                    <div>
                        <button onClick={handleClick} className="btn btn-primary mb-3 mt-3">
                        Show Table
                        </button>
                    </div>)
            }
            {table &&(
                    <div>
                        <button onClick={handleClick} className="btn btn-primary mb-3 mt-3">
                        Close Table
                    </button>
                    <OutputTable />
                    </div>)
            }
        </div>
      </div>
    </>
  )
}

export default DndRace