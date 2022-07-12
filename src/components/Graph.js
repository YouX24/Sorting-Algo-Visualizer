import React from 'react';
import {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import { bubbleSortAnimation } from '../helperFunctions/SortingAnimation';

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
            <div className="graph-bars" style={{height: num + 'px' , display: 'inline-block', marginLeft: '1px', marginRight: '1px', marginTop: 'auto'}}></div>
        );
        return graphArray;
    }

    // function to generate a new array and render new graph with "Generate New Array" button is clicked
    const generateNewArray = () => {
        setNums(createArray())
    }

    // NEED TO DO
    // have className for the bars - all the same - DONE
    // have an animation array that stores an array of 2 values that are being compared
    // loop through the animation array
    // grab all the bars with byClassName -> returns a array of bars
    // setTimeout to change the 2 bar color
    // get the two bars via index from the animation array
    // settimeout and set the bar height

    const sort = () => {
        let animate = bubbleSortAnimation(nums);
        let allBars = document.getElementsByClassName('graph-bars')
        let animationCount = 0;

        for (let ani of animate) {
            console.log(ani)
            if (ani[2] === 0) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = 'red'
                    allBars[ani[1]].style.backgroundColor = 'red'
                }, 300 * animationCount)
            } else if (ani[2] === 1) {
                setTimeout(() => {
                    let temp = allBars[ani[0]].style.height;
                    allBars[ani[0]].style.height = allBars[ani[1]].style.height;
                    allBars[ani[1]].style.height = temp;
                }, 300 * animationCount)
            } else {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = '#2CCCC3'
                    allBars[ani[1]].style.backgroundColor = '#2CCCC3'
                }, 300 * animationCount)
            }
            animationCount++;
        }

        // console.log(allBars)
        // for (let i = 0; i < allBars.length; i++) {
        //     for (let j = 0; j < allBars.length - 1; j ++) {
        //         if (parseInt(allBars[j].style.height, 10) > parseInt(allBars[j + 1].style.height, 10)) {
        //             // setTimeout(() => {
        //                 let temp = allBars[j].style.height
        //                 allBars[j].style.height = allBars[j + 1].style.height
        //                 allBars[j + 1].style.height = temp;
        //             // }, 1000 * animationCount)
        //             animationCount++;
                    
        //         }
        //     }
        // }
        // let animationCount = 0;
        // let array = [...nums]
        // for (let i = 0; i < 50; i++) {
        //     for (let j = 0; j < 50 - 1 - i; j++) {                    
        //         if (array[j] > array[j + 1]) {
        //             let temp = array[j];
        //             array[j] = array[j + 1];
        //             array[j + 1] = temp;
        //             setNums(() => {
        //                 setTimeout(() => {
        //                     console.log(array)
        //                 }, 1000)
        //                 return array
        //             })
        //             animationCount++
        //         }
        //     }
        // }
    }
    

    // const bubbleSort = () => {
    //     let animationCount = 1;
    //     let barsCopy = []

    //     // get and create object of only the id and height of each bar from state variable bars
    //     for (let bar of bars) {
    //         let barObj = {
    //             id: bar.props.id,
    //             height: bar.props.style.height
    //         }
    //         barsCopy.push(barObj);
    //     }

    //     // Sort the bars
    //     for (let i = 0; i < barsCopy.length - 1; i++) {
    //         for (let j = 0; j < barsCopy.length - i - 1; j++) {

    //             const elem1Height = parseInt(barsCopy[j].height, 10);
    //             const elem2Height = parseInt( barsCopy[j + 1].height, 10);

    //             if (elem1Height > elem2Height) {

    //                 // Change height in barsCopy
    //                 const b1 = barsCopy[j + 1].height
    //                 const temp = barsCopy[j].height;
    //                 barsCopy[j].height = barsCopy[j + 1].height;
    //                 barsCopy[j + 1].height = temp;

    //                 setTimeout(() => {
    //                     // Make changes to the DOM
    //                     document.getElementById(barsCopy[j].id).style.height = b1
    //                     document.getElementById(barsCopy[j + 1].id).style.height = temp
    //                 }, animationCount * 25)

    //                 animationCount++;
    //             }
    //         }
    //     }
        
    // }

    return (
        <div>
            <div className='graph' style={{display: 'grid', gridTemplateColumns: 'repeat(' + nums.length + ', 10px)'}}>
                {createBars()}
            </div>
            <button onClick={generateNewArray}>Generate New Array</button>
            <button onClick={sort}>Bubble Sort</button>
        </div>
    )
}

export default Graph;