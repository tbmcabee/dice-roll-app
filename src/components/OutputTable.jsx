import { useState, useEffect } from 'react'
import Spinner from './Spinner';

const URL = "https://api.open5e.com/v2/races/";

//Need to seperate this component into the landing page and a prop based table component (Needs to be reuseable)
function OutputTable() {
    const [isLoaded, setIsLoaded] = useState({
        dataLoaded: false, 
        tableClosed: true
    })

    const [jsonTraits, setJsonTraits] = useState()
    const [traitNames, setTraitNames] = useState([
        "Name",
        "Ability Score Increase",
        "Speed",
        "Age",
        "Alignment",
        "Size",
        "Languages",
    ])

    useEffect ( () => {
        const getData = async () => {
            const responseRaces = await fetch(URL)
            responseRaces.json().then(json => {
                let resultArray = json.results
                const keysArray = Object.keys(resultArray)
                let raceObjects = []

                for (let i = 0; i < keysArray.length; i++) {
                    let nameTrait = resultArray[i]["name"]
                    let arrayOfTraits = resultArray[i]["traits"]

                    let neededTraits = []

                    let currentTraitPos = 0
                    let currentPos = 0
                    let magicIndex = 0

                    const emptyDesc = "N/A"

                    while (currentPos < 6) {
                        console.log(arrayOfTraits.length)
                        const currentTrait = arrayOfTraits[currentTraitPos]
                        console.log(currentTrait)
                        if (currentTraitPos < arrayOfTraits.length && traitNames.includes(currentTrait["name"])) {
                            magicIndex = (traitNames.indexOf(currentTrait["name"])-1)
                            if (magicIndex === currentPos) {
                                neededTraits.push(currentTrait["desc"])
                                console.log(currentTrait["desc"])
                                currentTraitPos += 1
                                currentPos += 1
                            }
                            else {
                                neededTraits.push(emptyDesc)
                                currentPos += 1
                            }
                        }
                        else {
                            neededTraits.push(emptyDesc)
                            currentPos += 1
                            currentTraitPos += 1
                        }
                    }
            
                    let object = {
                        name : nameTrait,
                        desc : neededTraits
                    }
            
                    raceObjects.push(object)
                    console.log(object)
                }

                console.log(raceObjects)
                setJsonTraits(raceObjects)
                setIsLoaded({dataLoaded: true})
            })
        }

        getData();
    }, []);

  return (
    <div className="container">
        <div className="flex justify-center">
            {!isLoaded.dataLoaded? <Spinner /> :
                <table className="table-auto justify-content-center">
                    <thead>
                        <tr className="mb-8">
                            {traitNames.map((name, index) => (
                                <th key={index}>{name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {jsonTraits.map((race, index) => (
                        <tr key={index}>
                            <td>{race["name"]}</td>
                            {race["desc"].map((trait, indext) => (
                                <td key={indext}>{trait}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            }
        </div>
    </div>
  )
}

export default OutputTable