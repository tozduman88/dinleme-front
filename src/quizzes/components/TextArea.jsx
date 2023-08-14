import PropTypes from "prop-types";

const TextArea = ({ onChange, answer, requiredMessage }) => {
    return (
        <>
            <textarea
                autoFocus
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                onChange={onChange}
                value={answer}
            />
            {requiredMessage && <p>Напишите ответ.</p>}
        </>
    );
};

TextArea.propTypes = {
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.string.isRequired,
    requiredMessage: PropTypes.bool.isRequired,
};

export default TextArea;
