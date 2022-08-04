import {useEffect, useState} from 'react';
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
        const algoBtn = document.getElementById('algo-btn');
        const genNewArrayBtn = document.getElementById('gen-new-array-btn');
        const sortBtn = document.getElementById('sort-btn');
        const speedBtn = document.getElementById('speed-btn');
        const sizeSlider = document.getElementById('size-slider');

        algoBtn.disabled = true;
        genNewArrayBtn.disabled = true;
        sortBtn.disabled = true;
        speedBtn.disabled = true;
        sizeSlider.disabled = true;

        algoBtn.classList.remove('active-btn');
        algoBtn.classList.add('inactive-btn');
        genNewArrayBtn.classList.remove('active-btn');
        genNewArrayBtn.classList.add('inactive-btn');
        sortBtn.classList.remove('active-btn');
        sortBtn.classList.add('inactive-btn');
        speedBtn.classList.remove('active-btn');
        speedBtn.classList.add('inactive-btn');
    }

    const enableBtns = () => {
        const algoBtn = document.getElementById('algo-btn');
        const genNewArrayBtn = document.getElementById('gen-new-array-btn');
        const sortBtn = document.getElementById('sort-btn');
        const speedBtn = document.getElementById('speed-btn');
        const sizeSlider = document.getElementById('size-slider');

        algoBtn.disabled = false;
        genNewArrayBtn.disabled = false;
        sortBtn.disabled = false;
        speedBtn.disabled = false;
        sizeSlider.disabled = false;

        algoBtn.classList.remove('inactive-btn');
        algoBtn.classList.add('active-btn');
        genNewArrayBtn.classList.remove('inactive-btn');
        genNewArrayBtn.classList.add('active-btn');
        sortBtn.classList.remove('inactive-btn');
        sortBtn.classList.add('active-btn');
        speedBtn.classList.remove('inactive-btn');
        speedBtn.classList.add('active-btn');
    }

    const createArray = () => {
        // const array = [51, 66, 184, 246, 278, 280, 295, 298, 301, 327, 342, 345, 371];
        // const array = [7, 160, 23, 219, 42, 288, 322, 304, 361, 272, 21];
        // const array = [247, 235, 367, 87, 366, 79, 124, 260, 189]
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
                    allBars[ani[0]].style.height = ani[4] + 'px';
                    allBars[ani[1]].style.height = ani[3] + 'px'
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
                    allBars[ani[0]].style.height = ani[4] + 'px';
                    allBars[ani[1]].style.height = ani[3] + 'px';
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
                    allBars[ani[1]].style.height = ani[3] + 'px';
                    allBars[ani[0]].style.height = ani[4] + 'px';
                    console.log(`${ani[3]}   ${ani[4]}`)
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
                    allBars[ani[0]].style.height = ani[4] + 'px';
                    allBars[ani[1]].style.height = ani[3] + 'px';
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
        console.log(nums)
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
    }

    useEffect(() => {
        generateNewArray()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [arraySize])

    // change disabled btns to color red
    // change enabled btns to color green
    // add change array size feature

    return (
        <section className="container">
            <div className='btns'>
                <div className="sort-container">
                    <button id="algo-btn" className="sort-algo-btn first-btn active-btn" onClick={showAlgorithms}>{currentAlgorithm} <i className="fa-solid fa-angle-down"></i></button>
                    <div id='sorting-algorithms' className='sorting-algorithms' style={{visibility: 'hidden'}}>
                        <button className="sort-algo-btn active-btn" onClick={changeAlgorithm}>Bubble Sort</button>
                        <button className="sort-algo-btn active-btn" onClick={changeAlgorithm}>Selection Sort</button>
                        <button className="sort-algo-btn active-btn" onClick={changeAlgorithm}>Insertion Sort</button>
                        <button className="sort-algo-btn active-btn" onClick={changeAlgorithm}>Quick Sort</button>
                        <button className="sort-algo-btn active-btn last-btn" onClick={changeAlgorithm}>Merge Sort</button>
                    </div>
                </div>
                <div className="speed-container">
                    <button id="speed-btn" className="animation-speed-btn first-btn active-btn" onClick={showSpeeds}>Animation Speed : {currentSpeed} <i className="fa-solid fa-angle-down"></i></button>
                    <div id='speed-selection' className='speed-selection' style={{visibility: 'hidden'}}>
                        <button className="animation-speed-btn active-btn" onClick={changeSpeed}>Slow</button>
                        <button className="animation-speed-btn active-btn" onClick={changeSpeed}>Fast</button>
                        <button className="animation-speed-btn active-btn last-btn" onClick={changeSpeed}>Very Fast</button>
                    </div>
                </div>
                <div className="slider-container">
                    <input id="size-slider" className="array-size-range" onChange={changeSize} type="range" min="2" max="100" name="array-size"/>
                    <label for="array-size">Array Size</label>
                </div>
                <button id="gen-new-array-btn" className="rounded-btn active-btn" onClick={generateNewArray}>Generate New Array</button>
                <button id="sort-btn" className="rounded-btn active-btn" onClick={sort}>Sort</button>
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