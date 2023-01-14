import { testList } from '../data/testList';
import questions from '../data/questions';

export const useGenerateQuestions = (testId, allNamesCollection, rangeNamesCollection) => {

    if (questions.length !== 0) {
        questions.length = 0;
    }

    // { id: 1, value: '1-10', startIndex: 1, endIndex: 10 }
    const testObject = testList.find(object => object['value'] === testId);

    // choose random short meanings from all 99 names
    function randomShortMeanings(allNamesCollection, correctAnswerIndex) {
        let arr = [];
        while (arr.length < 3) {
            let randomizedIndex = Math.floor(Math.random() * allNamesCollection.length);
            if (
                randomizedIndex !== correctAnswerIndex ||
                randomizedIndex !== arr[0] ||
                randomizedIndex !== arr[1] ||
                randomizedIndex !== arr[2]
            ) {
                arr.push(randomizedIndex);
            }
        }
        return arr.map(index => allNamesCollection[index]['shortMeaning']);
    }

    // create questions list
    rangeNamesCollection.forEach(elem => {
        questions.push({
            question: elem.name,
            nameIndex: elem.id,
            correctAnswer: elem.shortMeaning,
            incorrectAnswers: randomShortMeanings(allNamesCollection, elem.id)
        })
    });
}

