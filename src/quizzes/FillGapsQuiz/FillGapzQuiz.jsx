import PropTypes from "prop-types";

export default function FillGapsQuiz({ phrases }) {
    return (
        <>
            <div>
                {phrases.map((phrase, i) => (
                    <p key={i}>{phrase.text}</p>
                ))}
            </div>
        </>
    );
}

FillGapsQuiz.propTypes = {
    phrases: PropTypes.array.isRequired,
};
