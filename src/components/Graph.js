import React from 'react';
import {useState, useEffect} from 'react';

const Graph = () => {

    const createArray = () => {
        const array = []
        for (let i = 0; i < 100; i++) {
            array.push(Math.floor(Math.random() * 400) + 1)
        }
        return array;
    }

    const [nums, setNums] = useState(createArray())

    // map over the state variable nums and create a new array of jsx elements using the value from the state variable
    const createBars = () => {
        let graphArray = nums.map((num) => 
        <div className="graph-bars" style={{height: num + 'px' , display: 'inline-block', marginLeft: '1px', marginRight: '1px', marginTop: 'auto'}}></div>
        );
        return graphArray;
    }

    const [bars, setBars] = useState(createBars())

    // function to generate a new array and render new graph with "Generate New Array" button is clicked
    const generateNewArray = () => {
        setNums(createArray())
        setBars(createBars())
    }

    useEffect(() => {
        // setBars(createBars())
        console.log('change')
    }, [nums])

    // FIX
    const bubbleSort = () => {
        const numsCopy = [...nums]
        for (let i = 0; i < numsCopy.length - 1; i++) {
            for (let j = 0; j < numsCopy.length - i - 1; j++) {
                if (numsCopy[j] > numsCopy[j + 1]) {
                    let temp = numsCopy[j];
                    numsCopy[j] = numsCopy[j + 1];
                    numsCopy[j + 1] = temp;
                    setNums(numsCopy)
                }
            }
        }
    }

    return (
        <div>
            <div className='graph' style={{display: 'grid', gridTemplateColumns: 'repeat(' + nums.length + ', 1fr)'}}>
                {bars}
            </div>
            <button onClick={generateNewArray}>Generate New Array</button>
            <button onClick={bubbleSort}>Bubble Sort</button>
        </div>
    )
}

export default Graph;