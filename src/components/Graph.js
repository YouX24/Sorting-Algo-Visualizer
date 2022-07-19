import React from 'react';
import {useState} from 'react';
import { bubbleSortAnimation, insertionSortAnimation, quickSortAnimation, selectionSortAnimation, mergeSortAnimation } from '../helperFunctions/SortingAnimation';

const Graph = () => {

    const UNSORTED = '#A8D0E6'
    const CURRENT = '#F76C6C';
    const SORTED = '#86C232';
    const CUR_MIN = 'pink';
    const SWAP_VALUE = '#BF40BF'

    const createArray = () => {
        const array = []
        for (let i = 0; i < 5; i++) {
            array.push(Math.floor(Math.random() * 400) + 1)
        }
        return array;
    }

    const [nums, setNums] = useState(createArray())

    // map over the state variable nums and create a new array of jsx elements using the value from the state variable
    const createBars = () => {
        let graphArray = nums.map((num) => 
            <div className="graph-bars" style={{height: num + 'px' , display: 'inline-block', marginLeft: '1px', marginRight: '1px', marginTop: 'auto', backgroundColor: '#A8D0E6'}}></div>
        );
        return graphArray;
    }

    // function to generate a new array and render new graph with "Generate New Array" button is clicked
    const generateNewArray = () => {
        setNums(createArray())
        let allBars = document.getElementsByClassName('graph-bars')
        for (let bar of allBars) {
            bar.style.backgroundColor = UNSORTED
        }
    }

    const bubbleSort = () => {
        let animate = bubbleSortAnimation(nums);
        let allBars = document.getElementsByClassName('graph-bars');
        let animationCount = 0;

        for (let ani of animate) {
            if (ani[2] === 0) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = CURRENT
                    allBars[ani[1]].style.backgroundColor = CURRENT
                }, 5 * animationCount)
            } else if (ani[2] === 1) {
                setTimeout(() => {
                    let temp = allBars[ani[0]].style.height;
                    allBars[ani[0]].style.height = allBars[ani[1]].style.height;
                    allBars[ani[1]].style.height = temp;
                }, 5 * animationCount)
            } else if (ani[2] === 3) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = SORTED
                }, 5 * animationCount)
            } else {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = UNSORTED
                    allBars[ani[1]].style.backgroundColor = UNSORTED
                }, 5 * animationCount)
            }
            animationCount++;
        }
    }

    const insertionSort = () => {
        const animate = insertionSortAnimation(nums);
        let allBars = document.getElementsByClassName('graph-bars');
        let animationCount = 0;

        for (let ani of animate) {
            if (ani[2] === 0) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = CURRENT
                    allBars[ani[1]].style.backgroundColor = CURRENT
                }, 10 * animationCount)
            }
            else if (ani[2] === 1) {
                setTimeout(() => {
                    let temp = allBars[ani[0]].style.height;
                    allBars[ani[0]].style.height = allBars[ani[1]].style.height;
                    allBars[ani[1]].style.height = temp;
                }, 10 * animationCount)
            } else if (ani[2] === 2) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = UNSORTED
                    allBars[ani[1]].style.backgroundColor = UNSORTED
                }, 10 * animationCount)
            } else {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = SORTED
                }, 10 * animationCount)
            }
            animationCount++;
        }
    }

    const selectionSort = () => {
        const animate = selectionSortAnimation(nums);
        let allBars = document.getElementsByClassName('graph-bars');
        let animationCount = 0;

        for (let ani of animate) {
            if (ani[2] === 1) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = CUR_MIN;
                }, 10 * animationCount)
            }
            else if (ani[2] === 2) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = CURRENT;
                }, 10 * animationCount)
            } else if (ani[2] === 3) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = UNSORTED
                }, 10 * animationCount)
            } else if (ani[2] === 4) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = SWAP_VALUE;
                    allBars[ani[1]].style.backgroundColor = SWAP_VALUE;
                }, 10 * animationCount)
            } else if (ani[2] === 5) {
                setTimeout(() => {
                    let temp = allBars[ani[1]].style.height
                    allBars[ani[1]].style.height = allBars[ani[0]].style.height
                    allBars[ani[0]].style.height = temp;
                }, 10 * animationCount)
            } else {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = SORTED;
                }, 10 * animationCount)
            }
            animationCount++;
        }
    }

    const quickSort = () => {
        const animate = quickSortAnimation(nums);
        let allBars = document.getElementsByClassName('graph-bars');
        let animationCount = 0;

        for (let ani of animate) {
            if (ani[2] === 0) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = "purple"
                }, 10 * animationCount)
            } else if (ani[2] === 1) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = SWAP_VALUE;
                    allBars[ani[1]].style.backgroundColor = SWAP_VALUE;
                }, 10 * animationCount)
            } else if (ani[2] === 2) {
                setTimeout(() => {
                    let temp = allBars[ani[0]].style.height;
                    allBars[ani[0]].style.height = allBars[ani[1]].style.height;
                    allBars[ani[1]].style.height = temp;
                }, 10 * animationCount)
            } else if (ani[2] === 3) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = UNSORTED;
                    allBars[ani[1]].style.backgroundColor = UNSORTED;
                }, 10 * animationCount)
            } else if (ani[2] === 4) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = SORTED;
                }, 10 * animationCount)
            } else if (ani[2] === 5) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = CURRENT;
                }, 10 * animationCount)
            }
            animationCount++;
        }
    }

    const mergeSort = () => {
        mergeSortAnimation(nums)
    }

    // Holds the current algorithm to be used
    const [currentAlgorithm, setCurrentAlgorithm] = useState('Bubble Sort');

    // Drop down
    const activeAlgorithms = () => {
        const dropDownBtn = document.getElementById('sorting-algorithms')
        if (dropDownBtn.style.visibility === 'hidden') {
            dropDownBtn.style.visibility = 'visible';
        } else {
            dropDownBtn.style.visibility = 'hidden'
        }
    }

    // Change algorithm to be used
    const changeAlgorithm = (event) => {
        setCurrentAlgorithm(event.target.innerHTML)
    }

    // Sort using the current selected algorithm
    const sort = () => {
        switch(currentAlgorithm) {
            case 'Bubble Sort':
                bubbleSort();
                break;
            case 'Selection Sort':
                selectionSort();
                break;
            case 'Insertion Sort':
                insertionSort();
                break;
            case 'Quick Sort':
                quickSort();
                break;
            case 'Merge Sort':
                mergeSort();
                break;
            default:
                console.log("algorithm not implemeneted yet.")
        }
    }

    return (
        <section>
            <div className='btns'>
                <div className="sort-container">
                    <button onClick={activeAlgorithms}>{currentAlgorithm}</button>
                    <div id='sorting-algorithms' className='sorting-algorithms'>
                        <button onClick={changeAlgorithm}>Bubble Sort</button>
                        <button onClick={changeAlgorithm}>Selection Sort</button>
                        <button onClick={changeAlgorithm}>Insertion Sort</button>
                        <button onClick={changeAlgorithm}>Quick Sort</button>
                        <button onClick={changeAlgorithm}>Merge Sort</button>
                    </div>
                </div>
                <button onClick={generateNewArray}>Generate New Array</button>
                <button onClick={sort}>Sort</button>
            </div>
            <div className='graph-container'>
                <div className='graph' style={{display: 'grid', gridTemplateColumns: 'repeat(' + nums.length + ', 10px)'}}>
                    {createBars()}
                </div>
            </div>
        </section>
    )
}

export default Graph;