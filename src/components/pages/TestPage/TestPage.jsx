import React from "react";
import { useParams } from "react-router-dom";

import { useGenerateQuestions } from "../../../hooks/useGenerateQuestions";
import { useNamesCollection } from "../../../hooks/useNamesCollection";

import { QuizProvider } from "../../../context/quiz";

import { testList } from "../../../data/testList";

import Quiz from "../../quiz/Quiz";
import CustomHeading from "../../ui/custom/CustomHeading/CustomHeading";

const TestPage = () => {
    const { testId } = useParams();

    // filling questions array with data
    const testObject = testList.find(object => object["value"] === testId);
    const allNamesCollection = useNamesCollection(99);
    const rangeNamesCollection = useNamesCollection(testObject.startIndex - 1, testObject.endIndex);

    useGenerateQuestions(testId, allNamesCollection, rangeNamesCollection);

    return (
        <section>
            <CustomHeading
                value={`w.test_title`}
                before={testId}
            />
            <QuizProvider>
                <Quiz />
            </QuizProvider>
        </section>
    );
};

export default TestPage;