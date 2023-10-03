import PropTypes from "prop-types";
import { fillGapsReducer } from "./fillGapsReducer";
import { useReducer, useRef, useEffect, useState } from "react";
import reactStringReplace from "react-string-replace";
import Button from "~/components/Button";
import Counter from "~/components/Counter";
import AudioPlayer from "~/components/AudioPlayer";
import CorrectAnswer from "~/quizzes/components/CorrectAnswer";
import Translation from "~/quizzes/components/Translation";
// import UserAnswer from "~/quizzes/components/UserAnswer";
import Results from "~/quizzes/components/Results";
import PopUp from "~/quizzes/components/PopUp";

export default function FillGapsQuiz({ phrases }) {
    const [state, dispatch] = useReducer(fillGapsReducer, {
        phrases: phrases,
        currentQuestionIndex: 0,
        showTranslation: false,
        isAnswered: false,
        showResults: false,
        correctAnswersCounter: 0,
        checkedInputs: [],
        userAnswers: [],
        isDisabled: false,
    });

    const [requiredMessage, setRequiredMessage] = useState(false);
    const currentQuestion = state.phrases[state.currentQuestionIndex];
    const toReplace = currentQuestion.to_replace.split(" ").join('').split(",");
    // чтобы убрать пробел перед вторым словом "kızgın, bana". Влияет на длину инпута

    let text = currentQuestion.text;
    const isDisabled = state.isDisabled;
    const hideShow = state.isAnswered ? "hidden" : "";

    const refs = useRef([]);
    const currentInputValues = useRef([]);

    useEffect(() => {
        if (state.isAnswered == true) {
            refs.current.splice(0, refs.current.length);
            currentInputValues.current.splice(
                0,
                currentInputValues.current.length
            );
        }
    }, [state.isAnswered]);

    useEffect(() => {
        refs.current[0].focus();
    }, [currentQuestion]);

    const setPopUp = () => {
        setRequiredMessage(true);
        setTimeout(() => {
            setRequiredMessage(false);
        }, 1000);
    };

    const handleChange = (e) => {
        const { value, maxLength } = e.target;

        if (value.length >= maxLength && e.target.nextElementSibling) {
            e.target.nextElementSibling.focus();
        }
    };

    const handleBlur = (e) => {
        const { value, id } = e.target;

        currentInputValues.current[id] = value.replace(/\s/g, "");
    };

    const checkHandler = () => {
        for (let i = 0; i < refs.current.length; i++) {
            if (
                currentInputValues.current[i] == null ||
                currentInputValues.current[i] === ""
            ) {
                setPopUp();
                return;
            }
        }
        if (requiredMessage) {
            setRequiredMessage(false);
        }
        console.log("currentInput", currentInputValues.current)
        dispatch({ type: "CHECK", payload: currentInputValues.current });
    };

    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            handleBlur(e);

            checkHandler();
        }
    };

    const showTrans = () => {
        dispatch({ type: "SHOW_TRANSLATION" });
    };

    for (let i = 0; i < toReplace.length; i++) {
        text = reactStringReplace(text, toReplace[i], (match) => (
            <input
                required
                id={i}
                key={i}
                name={match}
                maxLength={match.length}
                size={match.length}
                ref={(el) => {
                    refs.current[i] = el;
                }}
                className={
                    !state.isAnswered
                        ? ""
                        : state.checkedInputs[i]
                            ? "correct-answer"
                            : "wrong-answer"
                }
                style={{
                    border: requiredMessage
                        ? "1px solid red"
                        : "1px solid gray",
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isDisabled}
                onKeyDown={onKeyDownHandler}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="disabled"
            />
        ));
    }

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
                            {/* {userAnswer.isCorrect ? (
                                "Верно!"
                            ) : (
                                <UserAnswer text={userAnswer.text} />
                            )} */}

                            <CorrectAnswer text={currentQuestion.text} />
                            <Button
                                text="Далее"
                                onClick={() => dispatch({ type: "NEXT" })}
                            />
                        </>
                    ) : (
                            <>
                                <p>{text}</p>
                                <div className={`${hideShow}`}>
                                    <PopUp
                                        isOpen={requiredMessage}
                                        text="Заполните все пропуски"
                                    />
                                    <Button
                                        onClick={checkHandler}
                                        text="Проверить"
                                    />
                                </div>
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

FillGapsQuiz.propTypes = {
    phrases: PropTypes.array.isRequired,
};
