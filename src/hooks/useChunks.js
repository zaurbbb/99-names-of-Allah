export const useChunks = (arr, perChunk) => {
    return arr.reduce((resultArr, item, index) => {
        const chunkIndex = Math.floor(index / perChunk)

        if (!resultArr[chunkIndex]) {
            resultArr[chunkIndex] = []
        }

        resultArr[chunkIndex].push(item)

        return resultArr
    }, [])
};