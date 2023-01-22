export const shuffleAnswers = (correctAnswer, incorrectAnswers) => {
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