import React from 'react';
import {useState} from 'react';
import { nanoid } from 'nanoid';

const Graph = () => {

    const createArray = () => {
        const array = []
        for (let i = 0; i < 20; i++) {
            array.push(Math.floor(Math.random() * 400) + 1)
        }
        return array;
    }

    const [nums, setNums] = useState(createArray())

    // map over the state variable nums and create a new array of jsx elements using the value from the state variable
    const createBars = () => {
        let graphArray = nums.map((num) => 
            <div className="graph-bars" id={nanoid()} style={{height: num + 'px' , display: 'inline-block', marginLeft: '1px', marginRight: '1px', marginTop: 'auto'}}></div>
        );
        return graphArray;
    }

    const [bars, setBars] = useState(createBars())

    // function to generate a new array and render new graph with "Generate New Array" button is clicked
    const generateNewArray = () => {
        setNums(createArray())
        setBars(createBars())
    }

    const bubbleSort = () => {
        let animationCount = 1;
        let barsCopy = []

        // get and create object of only the id and height of each bar from state variable bars
        for (let bar of bars) {
            let barObj = {
                id: bar.props.id,
                height: bar.props.style.height
            }
            barsCopy.push(barObj);
        }

        for (let i = 0; i < barsCopy.length - 1; i++) {
            for (let j = 0; j < barsCopy.length - i - 1; j++) {

                const elem1Height = parseInt(barsCopy[j].height, 10);
                const elem2Height = parseInt( barsCopy[j + 1].height, 10);

                if (elem1Height > elem2Height) {

                    // Change height in barsCopy
                    const b1 = barsCopy[j + 1].height
                    const temp = barsCopy[j].height;
                    barsCopy[j].height = barsCopy[j + 1].height;
                    barsCopy[j + 1].height = temp;

                    setTimeout(() => {
                        // Make changes to the DOM
                        document.getElementById(barsCopy[j].id).style.height = b1
                        document.getElementById(barsCopy[j + 1].id).style.height = temp
                        console.log("time out")
                    },animationCount * 50)

                    

                    animationCount++;
                }

            }
        }
        // console.log('\n')
        // for (let bar of barsCopy) {
        //     console.log(bar)
        // }
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