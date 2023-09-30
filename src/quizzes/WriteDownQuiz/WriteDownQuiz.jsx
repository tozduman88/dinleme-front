/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import { writeDownReducer } from "./writeDownReducer";
import { useReducer, useState } from "react";
import Results from "~/quizzes/components/Results";
import Counter from "~/components/Counter";
import AudioPlayer from "~/components/AudioPlayer";
import Translation from "~/quizzes/components/Translation";
import TextArea from "~/quizzes/components/TextArea";
import Button from "~/components/Button";
import UserAnswer from "~/quizzes/components/UserAnswer";
import CorrectAnswer from "~/quizzes/components/CorrectAnswer";
import { addMyPhrase } from "~/utils/api";

const tg = window.Telegram.WebApp;

export default function WriteDownQuiz({ phrases }) {
    const [state, dispatch] = useReducer(writeDownReducer, {
        phrases: phrases,
        currentQuestionIndex: 0,
        showTranslation: false,
        isAnswered: false,
        showResults: false,
        correctAnswersCounter: 0,
        userAnswers: [],
    });

    const currentQuestion = state.phrases[state.currentQuestionIndex];
    const userAnswer = state.userAnswers[state.currentQuestionIndex];

    const [answer, setAnswer] = useState("");
    const [requiredMessage, setRequiredMessage] = useState(false);

    const setPopUp = () => {
        setRequiredMessage(true);
        setTimeout(() => {
            setRequiredMessage(false);
        }, 1000);
    };

    const checkHandler = () => {
        if (
            answer.replace(/\s/g, "") == null ||
            answer.replace(/\s/g, "") === ""
        ) {
            setPopUp();
            return;
        }

        dispatch({ type: "CHECK", payload: answer });

        if (requiredMessage) {
            setRequiredMessage(false);
        }

        setAnswer("");
    };

    const showTrans = () => {
        dispatch({ type: "SHOW_TRANSLATION" });
    };

    const add = async () => {
        const data = {
            phrase_id: currentQuestion.id,
            chat_id: "861668804",
        };

        console.log(data);
        await addMyPhrase(data);
    };

    return (
        <>
            {!state.showResults && (
                <>
                    <Counter
                        currentIndex={state.currentQuestionIndex + 1}
                        length={state.phrases.length}
                        text="Фраза"
                    />
                    <AudioPlayer
                        src={`/audio/${currentQuestion.id}.mp3`}
                        autoPlay={true}
                    />
                    <Translation
                        text={currentQuestion.trans}
                        isShown={state.showTranslation}
                        onClick={showTrans}
                    />
                    {state.isAnswered ? (
                        <>
                            {userAnswer.isCorrect ? (
                                "Верно!"
                            ) : (
                                <UserAnswer text={userAnswer.userInput} />
                            )}

                            <CorrectAnswer text={currentQuestion.text} />
                            <Button
                                text="Далее"
                                onClick={() => dispatch({ type: "NEXT" })}
                            />

                            <button onClick={add}>
                                Добавить в "Мои фразы"
                            </button>
                        </>
                    ) : (
                        <>
                            <TextArea
                                onChange={(e) => setAnswer(e.target.value)}
                                answer={answer}
                                requiredMessage={requiredMessage}
                            />
                            <Button text="Проверить" onClick={checkHandler} />
                        </>
                    )}
                </>
            )}

            {state.showResults && (
                <>
                    <Results
                        numOfCorrect={state.correctAnswersCounter}
                        length={state.phrases.length}
                        userAnswers={state.userAnswers}
                        type="gaps"
                    />
                    <Button
                        text="Ещё один раунд"
                        onClick={() => dispatch({ type: "RESTART" })}
                    />
                </>
            )}
        </>
    );
}

WriteDownQuiz.propTypes = {
    phrases: PropTypes.array.isRequired,
};
