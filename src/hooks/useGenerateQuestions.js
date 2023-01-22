import questions from "../data/questions";
import { shuffleAnswers } from "../helpers/shuffleAnswers";
import { setRandomMeanings } from "../helpers/setRandomMeanings";

export const useGenerateQuestions = (testId, allNamesCollection, rangeNamesCollection) => {
    if (questions.length !== 0) {
        questions.length = 0;
    }

    rangeNamesCollection.forEach(elem => {
        const incorrectAnswersValues = setRandomMeanings(allNamesCollection, elem.id);
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

