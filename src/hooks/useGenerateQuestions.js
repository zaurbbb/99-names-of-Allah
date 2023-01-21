import questions from "../data/questions";

export const useGenerateQuestions = (testId, allNamesCollection, rangeNamesCollection) => {
    if (questions.length !== 0) {
        questions.length = 0;
    }

    // check that all elements or array are different from each other
    function areDistinct(arr) {
        let n = arr.length;

        // Put all array elements in a map
        let s = new Set();
        for (let i = 0; i < n; i++) {
            s.add(arr[i]);
        }

        // If all elements are distinct, size of
        // set should be same array.
        return (s.size === arr.length);
    }

    // choose random short meanings from all 99 names
    function randomShortMeanings(allNamesCollection, correctAnswerIndex) {
        let arr = [];
        while (arr.length < 3) {
            let randomizedIndex = Math.floor(Math.random() * allNamesCollection.length);

            if (areDistinct(arr) && randomizedIndex !== correctAnswerIndex - 1) {
                arr.push(randomizedIndex);
            }
        }
        return arr.map(index => allNamesCollection[index]["shortMeaning"]);
    }

    function shuffleAnswers(correctAnswer, incorrectAnswers) {
        const unshuffledAnswers = [
            correctAnswer,
            ...incorrectAnswers
        ];

        return unshuffledAnswers
            .map(unshuffledAnswer => ({
                sort: Math.random(),
                value: unshuffledAnswer
            }))
            .sort((a, b) => a.sort - b.sort)
            .map(el => el.value);
    }

    // create questions list
    rangeNamesCollection.forEach(elem => {
        const incorrectAnswersValues = randomShortMeanings(allNamesCollection, elem.id);
        questions.push({
            question: elem.name,
            nameArabic: elem.nameArabic,
            nameIndex: elem.id,
            correctAnswer: elem.shortMeaning,
            incorrectAnswers: incorrectAnswersValues,
            shuffledAnswers: shuffleAnswers(elem.shortMeaning, incorrectAnswersValues),
            // shuffledAnswers: shuffleAnswers(questions.correctAnswer, questions.incorrectAnswers),
        })
    });

}

