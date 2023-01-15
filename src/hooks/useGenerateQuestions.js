import questions from '../data/questions';

export const useGenerateQuestions = (testId, allNamesCollection, rangeNamesCollection) => {
    if (questions.length !== 0) {
        questions.length = 0;
    }

    // choose random short meanings from all 99 names
    function randomShortMeanings(allNamesCollection, correctAnswerIndex) {
        let arr = [];
        while (arr.length < 3) {
            let randomizedIndex = Math.floor(Math.random() * allNamesCollection.length);
            if (
                randomizedIndex !== correctAnswerIndex ||
                arr[0] !== arr[1] ||
                arr[0] !== arr[2] ||
                arr[1] !== arr[2]
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
            nameArabic: elem.nameArabic,
            nameIndex: elem.id,
            correctAnswer: elem.shortMeaning,
            incorrectAnswers: randomShortMeanings(allNamesCollection, elem.id)
        })
    });
}

export default questions;
