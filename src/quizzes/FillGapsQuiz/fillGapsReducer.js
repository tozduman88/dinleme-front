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
            console.log("checkedInputs ", checkedInputs);
            const answerIsCorrect = checkedInputs.every(
                (item) => item === true
            );
            const correctAnswersCounter = answerIsCorrect
                ? state.correctAnswersCounter + 1
                : state.correctAnswersCounter;

            const answer = {
                id: state.phrases[state.currentQuestionIndex].id,
                text: state.phrases[state.currentQuestionIndex].text,
                trans: state.phrases[state.currentQuestionIndex].trans,
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

        case "RESTART": {
            return {
                ...state,
                showResults: false,
                userAnswers: [],
                correctAnswersCounter: 0,
                currentQuestionIndex: 0,
            };
        }

        default: {
            return state;
        }
    }
};
