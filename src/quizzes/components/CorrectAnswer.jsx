import PropTypes from "prop-types";

export default function CorrectAnswer({ text }) {
    return <p>{text}</p>;
}

CorrectAnswer.propTypes = {
    text: PropTypes.string.isRequired,
};
