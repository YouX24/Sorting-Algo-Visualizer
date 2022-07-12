export const bubbleSortAnimation = (array) => {
    const animation = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            animation.push([j, j+1, 0]) // 0 = change color
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                animation.push([j, j+1, 1]) // 1 = swap values
            }
            animation.push([j, j+1, 2]) // 2 = revert color
        }
    }
    return animation;
}

