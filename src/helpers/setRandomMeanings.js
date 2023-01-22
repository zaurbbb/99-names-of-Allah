import { isArrayDistinct } from "./isArrayDistinct";

export const setRandomMeanings = (allNamesCollection, correctAnswerIndex) => {
    let arr = [];
    while (arr.length < 3) {
        let randomizedIndex = Math.floor(Math.random() * allNamesCollection.length);

        if (isArrayDistinct(arr) && randomizedIndex !== correctAnswerIndex - 1) {
            arr.push(randomizedIndex);
        }
    }
    return arr.map(index => allNamesCollection[index]["shortMeaning"]);
}