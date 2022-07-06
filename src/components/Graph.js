import React from 'react';
import {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';

const Graph = () => {

    const createArray = () => {
        const array = []
        for (let i = 0; i < 10; i++) {
            array.push(Math.floor(Math.random() * 400) + 1)
        }
        return array;
    }

    const [nums, setNums] = useState(createArray())

    // map over the state variable nums and create a new array of jsx elements using the value from the state variable
    const createBars = () => {
        let graphArray = nums.map((num) => 
            <div className="graph-bars" id={nanoid()} value={num} style={{height: num + 'px' , display: 'inline-block', marginLeft: '1px', marginRight: '1px', marginTop: 'auto'}}></div>
        );
        return graphArray;
    }

    const [bars, setBars] = useState(createBars())

    // function to generate a new array and render new graph with "Generate New Array" button is clicked
    const generateNewArray = () => {
        setNums(createArray())
        setBars(createBars())
    }

    // useEffect(() => {
    //     setBars(createBars())
    // }, [nums])

    const setArray = (e1Id, e2Id, animationCount) => {
        setTimeout(() => {
            const bar1 = document.getElementById(e1Id);
            const bar2 = document.getElementById(e2Id);
            let bar1Height = bar1.style.height;
            bar1.style.height = bar2.style.height;
            bar2.style.height = bar1Height;
        }, animationCount * 1000)
    }

    const bubbleSort = () => {
        let animationCount = 1;
        const barsCopy = [...bars]
        for (let i = 0; i < barsCopy.length; i++) {
            for (let j = 0; j < barsCopy.length - i - 1; j++) {
                const elem1 = barsCopy[j];
                const elem2 = barsCopy[j + 1];

                if (elem1.props.style.height > elem2.props.style.height) {
                    barsCopy[j] = barsCopy[j + 1];
                    barsCopy[j + 1] = elem1;
                    setArray(elem1.props.id, elem2.props.id, animationCount)
                }
                animationCount++;
            }
        }
    }

    return (
        <div>
            <div className='graph' style={{display: 'grid', gridTemplateColumns: 'repeat(' + nums.length + ', 10px)'}}>
                {bars}
            </div>
            <button onClick={generateNewArray}>Generate New Array</button>
            <button onClick={bubbleSort}>Bubble Sort</button>
        </div>
    )
}

export default Graph;