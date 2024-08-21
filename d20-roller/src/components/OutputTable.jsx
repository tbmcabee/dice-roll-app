import { useState, useEffect } from 'react'
import Spinner from './Spinner';

//Need to fix async table issue
//BIG ISSUE, not all of the data has the same cateogry data or organization...
//Need to rework how I process it

                    // for (let j = 0; j < 6; j++) {
                    //     const currentTrait = resultArray[i]["traits"][j]
                    //     if (traitNames.includes(currentTrait["name"])) {
                    //         if (traitNames[j].toString() == currentTrait["name"]) {
                    //             neededTraits.append(currentTrait)
                    //         }
                    //         else {
                    //             neededTraits.append({
                    //                 "name" : "N/A",
                    //                 "desc" : "N/A"
                    //             })
                    //         }
                    //         neededTraits.append(currentTrait)
                    //     }
                    // }

                        //array of results
    // console.log(jsonObject)
    // console.log(jsonState)
    // let resultsArray = jsonState
    // console.log(resultsArray)
    // const keysArray = Object.keys(resultsArray)
    // let raceObjects = []
    
    // for (let i = 0; i < keysArray.length; i++) {
    //     //parses out needed data from json body: name, category traits, etc
    //     let nameTrait = resultsArray[i]["name"]
    //     console.log(nameTrait)
    //     let neededTraits = resultsArray[i]["traits"].slice(0, 6)
    //     console.log(neededTraits)

    //     let object = {
    //         name : nameTrait,
    //         trait : neededTraits
    //     }

    //     console.log(object)

    //     raceObjects.push(object)
    // }



    // let neededTraits = []

    // let currentTraitPos = 0
    // let currentPos = 0
    // let magicIndex = 0

    // const emptyDesc = "N/A"

    // while (currentPos < 6) {
    //     console.log(arrayOfTraits.length)
    //     const currentTrait = arrayOfTraits[currentTraitPos]
    //     console.log(currentTrait)
    //     if (currentTraitPos < arrayOfTraits.length && traitNames.includes(currentTrait["name"])) {
    //         magicIndex = (traitNames.indexOf(currentTrait["name"])-1)
    //         if (magicIndex === currentPos) {
    //             neededTraits.push(currentTrait["desc"])
    //             console.log(currentTrait["desc"])
    //             currentTraitPos += 1
    //             currentPos += 1
    //         }
    //         else {
    //             neededTraits.push(emptyDesc)
    //             currentPos += 1
    //         }
    //     }
    //     else {
    //         neededTraits.push(emptyDesc)
    //         currentPos += 1
    //         currentTraitPos += 1
    //     }
    // }

    // let neededTraits = []

    //                 let counter = 0
    //                 let traitCounter = 1

    //                 const emptyDesc = "N/A"

    //                 while (counter < 6) {
    //                     console.log(arrayOfTraits.length)
    //                     const currentTrait = arrayOfTraits[counter]
    //                     console.log(currentTrait)
    //                     if (counter < arrayOfTraits.length && traitNames.includes(currentTrait["name"])) {
    //                         if (traitNames[traitCounter].localeCompare(currentTrait["name"]) === 0) {
    //                             neededTraits.push(currentTrait["desc"])
    //                             console.log(currentTrait["desc"])
    //                             counter += 1
    //                             traitCounter += 1
    //                         }
    //                         else {
    //                             console.log("Got to be quicker then that")
    //                             neededTraits.push(emptyDesc)
    //                             counter += 1
    //                         }
    //                     }
    //                     else {
    //                         neededTraits.push(emptyDesc)
    //                         counter += 1
    //                     }
    //                 }

  //

//Got the data to show, now I just need to have the categories adapt or add an additional or extra values/abilities 

const URL = "https://api.open5e.com/v2/races/";

function OutputTable() {
    const [isLoaded, setIsLoaded] = useState(false)
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
            console.log(responseRaces)
            responseRaces.json().then(json => {
                let resultArray = json.results
                const keysArray = Object.keys(resultArray)
                let raceObjects = []

                for (let i = 0; i < keysArray.length; i++) {
                    //parses out needed data from json body: name, category traits, etc
                    let nameTrait = resultArray[i]["name"]
                    let arrayOfTraits = resultArray[i]["traits"]
                    console.log(nameTrait)

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
                    console.log(neededTraits)
            
                    let object = {
                        name : nameTrait,
                        desc : neededTraits
                    }
            
                    console.log(object)
            
                    raceObjects.push(object)
                }

                console.log(raceObjects)
                setJsonTraits(raceObjects)
            })
        }

        setIsLoaded(true)

        getData();
    }, []);

  //for loop results, then for loop traits (Each trait is a thread up to Languages), throw desc into the body

  //I broke the loading :((( trying to implement spinner so will need to handle that tomorrow 
  return (
    <div>
        {isLoaded && 
            <table className="table-auto">
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
  )
}

export default OutputTable