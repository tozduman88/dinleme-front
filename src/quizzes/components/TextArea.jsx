import PropTypes from "prop-types";
import PopUp from "./PopUp";

const TextArea = ({ onChange, answer, requiredMessage }) => {
    return (
        <>
            <textarea
                autoFocus
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                maxLength={92}
                onChange={onChange}
                value={answer}
                style={{
                    border: requiredMessage
                        ? "2px solid red"
                        : "2px solid gray",
                }}
            />
            <PopUp isOpen={requiredMessage} text="Напишите ваш ответ" />
        </>
    );
};

TextArea.propTypes = {
    onChange: PropTypes.func.isRequired,
    answer: PropTypes.string.isRequired,
    requiredMessage: PropTypes.bool.isRequired,
};

export default TextArea;
