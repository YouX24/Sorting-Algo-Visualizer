import {useState} from 'react';
import { bubbleSortAnimation, insertionSortAnimation, quickSortAnimation, selectionSortAnimation, mergeSortAnimation } from '../helperFunctions/SortingAnimation';

const Graph = () => {

    const UNSORTED = '#A8D0E6'
    const CURRENT = '#F76C6C';
    const SORTED = '#86C232';
    const CUR_MIN = 'pink';
    const SWAP_VALUE = '#BF40BF'

    const [speed, setSpeed] = useState(10);
    const [arraySize, setArraySize] = useState(50);

    const disableBtns = () => {
        document.getElementById('algo-btn').disabled = true;
        document.getElementById('gen-new-array-btn').disabled = true;
        document.getElementById('sort-btn').disabled = true;
        document.getElementById('speed-btn').disabled = true;
    }

    const enableBtns = () => {
        document.getElementById('algo-btn').disabled = false;
        document.getElementById('gen-new-array-btn').disabled = false;
        document.getElementById('sort-btn').disabled = false;
        document.getElementById('speed-btn').disabled = false;
    }

    const createArray = () => {
        const array = [];
        for (let i = 0; i < arraySize; i++) {
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
        console.log('array size changed: ' + allBars.length)
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
                }, speed * animationCount)
            } else if (ani[2] === 1) {
                setTimeout(() => {
                    let temp = allBars[ani[0]].style.height;
                    allBars[ani[0]].style.height = allBars[ani[1]].style.height;
                    allBars[ani[1]].style.height = temp;
                }, speed * animationCount)
            } else if (ani[2] === 3) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = SORTED
                }, speed * animationCount)
            } else {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = UNSORTED
                    allBars[ani[1]].style.backgroundColor = UNSORTED
                }, speed * animationCount)
            }
            animationCount++;
        }

        setTimeout(() => {
            enableBtns();
        }, speed * animationCount)
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
                }, speed * animationCount)
            }
            else if (ani[2] === 1) {
                setTimeout(() => {
                    let temp = allBars[ani[0]].style.height;
                    allBars[ani[0]].style.height = allBars[ani[1]].style.height;
                    allBars[ani[1]].style.height = temp;
                }, speed * animationCount)
            } else if (ani[2] === 2) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = UNSORTED
                    allBars[ani[1]].style.backgroundColor = UNSORTED
                }, speed * animationCount)
            } else {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = SORTED
                }, speed * animationCount)
            }
            animationCount++;
        }

        setTimeout(() => {
            enableBtns();
        }, speed * animationCount)
    }

    const selectionSort = () => {
        const animate = selectionSortAnimation(nums);
        let allBars = document.getElementsByClassName('graph-bars');
        let animationCount = 0;

        for (let ani of animate) {
            if (ani[2] === 1) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = CUR_MIN;
                }, speed * animationCount)
            }
            else if (ani[2] === 2) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = CURRENT;
                }, speed * animationCount)
            } else if (ani[2] === 3) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = UNSORTED
                }, speed * animationCount)
            } else if (ani[2] === 4) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = SWAP_VALUE;
                    allBars[ani[1]].style.backgroundColor = SWAP_VALUE;
                }, speed * animationCount)
            } else if (ani[2] === 5) {
                setTimeout(() => {
                    let temp = allBars[ani[1]].style.height
                    allBars[ani[1]].style.height = allBars[ani[0]].style.height
                    allBars[ani[0]].style.height = temp;
                }, speed * animationCount)
            } else {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = SORTED;
                }, speed * animationCount)
            }
            animationCount++;
        }

        setTimeout(() => {
            enableBtns();
        }, speed * animationCount)
    }

    const quickSort = () => {
        const animate = quickSortAnimation(nums);
        let allBars = document.getElementsByClassName('graph-bars');
        let animationCount = 0;

        for (let ani of animate) {
            if (ani[2] === 0) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = "purple"
                }, speed * animationCount)
            } else if (ani[2] === 1) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = SWAP_VALUE;
                    allBars[ani[1]].style.backgroundColor = SWAP_VALUE;
                }, speed * animationCount)
            } else if (ani[2] === 2) {
                setTimeout(() => {
                    let temp = allBars[ani[0]].style.height;
                    console.log(temp)
                    allBars[ani[0]].style.height = allBars[ani[1]].style.height;
                    allBars[ani[1]].style.height = temp;
                }, speed * animationCount)
            } else if (ani[2] === 3) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = UNSORTED;
                    allBars[ani[1]].style.backgroundColor = UNSORTED;
                }, speed * animationCount)
            } else if (ani[2] === 4) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = SORTED;
                }, speed * animationCount)
            } else if (ani[2] === 5) {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = CURRENT;
                }, speed * animationCount)
            }
            animationCount++;
        }

        setTimeout(() => {
            enableBtns();
        }, speed * animationCount)
    }

    const mergeSort = () => {
        const animate = mergeSortAnimation(nums)
        let allBars = document.getElementsByClassName('graph-bars');
        let animationCount = 0;

        for (let ani of animate) {
            if (ani[2] === 0) {
                setTimeout(() => {
                    allBars[ani[1]].style.backgroundColor = CURRENT;
                }, speed * animationCount)
            } else if (ani[2] === 1) {
                setTimeout(() => {
                    allBars[ani[1]].style.height = ani[0] + 'px';
                }, speed * animationCount)
            } else if (ani[2] === 2) {
                setTimeout(() => {
                    allBars[ani[1]].style.backgroundColor = UNSORTED;
                }, speed * animationCount)
            } else {
                setTimeout(() => {
                    allBars[ani[0]].style.backgroundColor = SORTED;
                }, speed * animationCount)
            }
            animationCount++;
        }

        setTimeout(() => {
            enableBtns();
        }, speed * animationCount)
    }

    // Holds the current algorithm to be used
    const [currentAlgorithm, setCurrentAlgorithm] = useState('Bubble Sort');
    const [currentSpeed, setCurrentSpeed] = useState('Fast')

    // Drop down
    const showAlgorithms = () => {
        console.log('clicked')
        const dropDownBtn = document.getElementById('sorting-algorithms')
        if (dropDownBtn.style.visibility === 'hidden') {
            dropDownBtn.style.visibility = 'visible';
        } else {
            dropDownBtn.style.visibility = 'hidden';
        }
    }

    // Change algorithm to be used
    const changeAlgorithm = (event) => {
        setCurrentAlgorithm(event.target.innerHTML);
        generateNewArray();
        document.getElementById('sorting-algorithms').style.visibility = 'hidden';
    }

    const showSpeeds = () => {
        const animationSpeedBtn = document.getElementById('speed-selection');
        if (animationSpeedBtn.style.visibility === 'hidden') {
            animationSpeedBtn.style.visibility = 'visible';
        } else {
            animationSpeedBtn.style.visibility = 'hidden';
        }
    }

    const changeSpeed = (event) => {
        setCurrentSpeed(event.target.innerHTML);
        switch(event.target.innerHTML) {
            case 'Slow':
                setSpeed(50);
                break;
            case 'Fast':
                setSpeed(10);
                break;
            case 'Very Fast':
                setSpeed(1);
                break;
            default:
                console.log("There was an error. No such speed exists.")
        }
        document.getElementById('speed-selection').style.visibility = 'hidden';
    }

    // Sort using the current selected algorithm
    const sort = () => {
        disableBtns();
        document.getElementById('sorting-algorithms').style.visibility = 'hidden';
        document.getElementById('speed-selection').style.visibility = 'hidden';

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

    const changeSize = () => {
        const sizeRange = document.querySelector('.array-size-range');
        setArraySize(sizeRange.value);
        console.log('size changed: ' + sizeRange.value)
        generateNewArray();
    }

    // change disabled btns to color red
    // change enabled btns to color green
    // add change array size feature

    return (
        <section>
            <div className='btns'>
                <div className="sort-container">
                    <button id="algo-btn" onClick={showAlgorithms}>{currentAlgorithm} <i className="fa-solid fa-angle-down"></i></button>
                    <div id='sorting-algorithms' className='sorting-algorithms' style={{visibility: 'hidden'}}>
                        <button onClick={changeAlgorithm}>Bubble Sort</button>
                        <button onClick={changeAlgorithm}>Selection Sort</button>
                        <button onClick={changeAlgorithm}>Insertion Sort</button>
                        <button onClick={changeAlgorithm}>Quick Sort</button>
                        <button onClick={changeAlgorithm}>Merge Sort</button>
                    </div>
                </div>
                <div className="speed-container">
                    <button id="speed-btn" onClick={showSpeeds}>Animation Speed : {currentSpeed} <i className="fa-solid fa-angle-down"></i></button>
                    <div id='speed-selection' className='speed-selection' style={{visibility: 'hidden'}}>
                        <button onClick={changeSpeed}>Slow</button>
                        <button onClick={changeSpeed}>Fast</button>
                        <button onClick={changeSpeed}>Very Fast</button>
                    </div>
                </div>
                <div>
                    <input className="array-size-range" onChange={changeSize} type="range" min="2" max="100" name="array-size"/>
                    <label for="array-size">Size</label>
                </div>
                <button id="gen-new-array-btn" onClick={generateNewArray}>Generate New Array</button>
                <button id="sort-btn" onClick={sort}>Sort</button>
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