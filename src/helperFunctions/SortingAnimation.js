export const bubbleSortAnimation = (array) => {
    const animation = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            // push to animation array to change bar color
            // 0 = change color
            animation.push([j, j+1, 0])
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                //push to animation array to swap value
                // 1 = swap values
                animation.push([j, j+1, 1]);
            }
            // push to animation array to revert bar color
            // 2 = revert color
            animation.push([j, j+1, 2]);
        }
        // push to animation array to change the color of sorted section
        // 3 = change color to green
        animation.push([array.length - 1 - i, array.length - 1 - i, 3]);
    }
    return animation;
}

export const insertionSortAnimation = (array) => {
    const animation = [];

    for (let i = 1; i < array.length; i++) {
        let prevIndex = i - 1;
        let currentValue = array[i];
        while (prevIndex >=  0 && currentValue < array[prevIndex]) {
            // push to change color
            animation.push([prevIndex + 1, prevIndex, 0])
            let temp = array[prevIndex + 1];
            array[prevIndex + 1] = array[prevIndex];
            array[prevIndex] = temp;
            // push to swap value
            animation.push([prevIndex + 1, prevIndex, 1])
            // push to revert color
            animation.push([prevIndex + 1, prevIndex, 2])
            prevIndex--;
        }
    }

    // for each bar, set color to green = sorted
    for (let i = 0; i < array.length; i++) {
        animation.push([i, i, 3])
    }
    
    return animation;
}

export const selectionSortAnimation = (array) => {
    const animation = [];

    for (let i = 0; i < array.length - 1; i++) {
        let min = i;

        // color the current min bar
        // 1 = color min
        animation.push([min, min, 1]);

        for (let j = i + 1; j < array.length; j++) {
            // color bar that is being looked at
            // 2 = color current bar
            animation.push([j, j, 2]);

            if (array[j] < array[min]) {
                // revert the color of the current min bar
                // 3 = revert current min
                animation.push([min, min, 3])

                // color the new min bar
                animation.push([j, j, 1]);

                min = j;
            } else {
                // revert current pointer color
                animation.push([j, j, 3]);
            }
        }

        // color the two bars that will be swapped.
        // 4 = colors bars that will be swapped
        animation.push([i, min, 4]);

        // revert the current min bar color 
        animation.push([min, min, 3])

        // swap the two bars
        // 5 = swap values
        animation.push([i, min, 5]);

        // revert the swapped bars back to regular color
        animation.push([i, min, 3]);

        // Color the sorted section
        // 6 = sorted
        animation.push([i, i, 6]);

        let temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }

    // Color the last bar
    animation.push([array.length - 1, array.length - 1, 6])

    return animation;
}

export const quickSortAnimation = (array) => {
    const animation = [];
    quickSort(array, 0, array.length - 1, animation);
    for (let i = 0; i < array.length; i++) {
        animation.push([i, i, 4]);
    }
    return animation;
}

const quickSort = (array, low, high, animation) => {
    if (low < high) {
        let pivotIndex = partition(array, low, high, animation);
        quickSort(array, low, pivotIndex - 1, animation);
        quickSort(array, pivotIndex + 1, high, animation);
    }
}

const partition = (array, low, high, animation) => {

    let pivot = array[high];

    //Color the pivot
    // 0 = color pivot
    animation.push([high, high, 0])

    let i = low - 1;

    for (let j = low; j <= high; j++) {
        if (array[j] < pivot) {
            i++;
            
            // Color the two bars to be swapped
            // 1 = color bars to be swapped
            animation.push([i, j, 1])

            // swap the bars
            // 2 = swap bars
            animation.push([i, j, 2])

            // revert the bar color
            // 3 = revert color
            animation.push([i, j, 3])

            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
        else {
            animation.push([j, j, 5]) // current search bar
            animation.push([j, j, 3]) // revert current search bar
        }
    }

    // Color the two bars to be swapped
    animation.push([i + 1, high, 1])

    // swap the bars
    animation.push([i + 1, high, 2])

    // revert the bar color
    animation.push([i + 1, high, 3])

    // color the sorted bar
    // animation.push([i + 1, i + 1, 4])

    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;

    return (i + 1);
}