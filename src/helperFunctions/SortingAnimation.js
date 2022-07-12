export const bubbleSortAnimation = (array) => {
    const animation = []
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
                animation.push([j, j+1, 1])
            }
            // push to animation array to revert bar color
            // 2 = revert color
            animation.push([j, j+1, 2])
        }
        // push to animation array to change the color of sorted section
        // 3 = change color to green
        animation.push([array.length - 1 - i, array.length - 1 - i, 3])
    }
    return animation;
}

