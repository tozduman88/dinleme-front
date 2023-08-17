export const writeDownReducer = (state, action) => {
    switch (action.type) {
        case "CHECK": {
            const currentQuestion = state.phrases[state.currentQuestionIndex];
            const currentInput = action.payload;
            let answer;
            let correctAnswersCounter;

            if (
                currentInput
                    .replace(/[.,/#!?$%^&*;:{}=\-_`~()]/g, "")
                    .toLocaleUpperCase("tr-TR")
                    .split(" ")
                    .join("") ===
                currentQuestion.text
                    .replace(/[.,/#!?$%^&*;:{}=\-_`~()]/g, "")
                    .toLocaleUpperCase("tr-TR")
                    .split(" ")
                    .join("")
            ) {
                answer = {
                    id: currentQuestion.id,
                    userInput: currentInput,
                    text: state.phrases[state.currentQuestionIndex].text,
                    trans: state.phrases[state.currentQuestionIndex].trans,
                    isCorrect: true,
                };
                correctAnswersCounter = state.correctAnswersCounter + 1;
            } else {
                answer = {
                    id: currentQuestion.id,
                    userInput: currentInput,
                    text: state.phrases[state.currentQuestionIndex].text,
                    trans: state.phrases[state.currentQuestionIndex].trans,
                    isCorrect: false,
                };
                correctAnswersCounter = state.correctAnswersCounter;
            }

            return {
                ...state,
                isAnswered: true,
                userAnswers: [...state.userAnswers, answer],
                correctAnswersCounter,
                showTranslation: true,
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
                currentQuestionIndex,
                showResults,
                isAnswered: false,
                showTranslation: false,
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
