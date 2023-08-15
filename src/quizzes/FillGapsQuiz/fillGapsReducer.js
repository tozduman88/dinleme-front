export const fillGapsReducer = (state, action) => {
    switch (action.type) {
        case "CHECK": {
            const correctAnswers =
                state.phrases[state.currentQuestionIndex].toReplace;
            const currentInputValues = action.payload;

            let checkedInputs = [];

            for (let i = 0; i < currentInputValues.length; i++) {
                if (
                    correctAnswers[i].toLowerCase() ===
                    currentInputValues[i].toLowerCase()
                ) {
                    checkedInputs.push(true);
                } else {
                    checkedInputs.push(false);
                }
            }
            const answerIsCorrect = checkedInputs.every(
                (item) => item === true
            );
            const correctAnswersCounter = answerIsCorrect
                ? state.correctAnswersCounter + 1
                : state.correctAnswersCounter;

            const answer = {
                id: state.phrases[state.currentQuestionIndex].id,
                correctText: state.phrases[state.currentQuestionIndex].text,
                translation:
                    state.phrases[state.currentQuestionIndex].translation,
                isCorrect: answerIsCorrect,
            };

            return {
                ...state,
                isAnswered: true,
                correctAnswersCounter,
                userAnswers: [...state.userAnswers, answer],
                showTranslation: true,
                isDisabled: true,
                checkedInputs,
            };
        }

        case "NEXT": {
            const showResults =
                state.currentQuestionIndex === state.phrases.length - 1;

            const currentQuestionIndex = showResults
                ? state.currentQuestionIndex
                : state.currentQuestionIndex + 1;

            return {
                ...state,
                isAnswered: false,
                currentQuestionIndex,
                showResults,
                showTranslation: false,
                isDisabled: false,
                checkedInputs: [],
            };
        }
        case "SHOW_TRANSLATION": {
            return {
                ...state,
                showTranslation: true,
            };
        }

        default: {
            return state;
        }
    }
};
