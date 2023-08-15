import PropTypes from "prop-types";
import List from "./List";

const Results = ({ numOfCorrect, length, userAnswers }) => {
    const wrongAnswers = userAnswers.filter((answer) => !answer.isCorrect);
    const correctAnswers = userAnswers.filter((answer) => answer.isCorrect);
    return (
        <>
            <div className="result-count">
                <h3>
                    Ваш результат: {numOfCorrect} из {length}
                </h3>
            </div>
            {length - numOfCorrect > 0 && (
                <div>
                    <h4>Фразы, в которых вы ошиблись: </h4>

                    <List phrases={wrongAnswers} />
                </div>
            )}
            {numOfCorrect > 0 && (
                <div>
                    <h4>Верные ответы: </h4>

                    <List phrases={correctAnswers} />
                </div>
            )}
        </>
    );
};

export default Results;

Results.propTypes = {
    numOfCorrect: PropTypes.number,
    length: PropTypes.number,
    userAnswers: PropTypes.array,
};
