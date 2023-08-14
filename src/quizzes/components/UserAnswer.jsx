import PropTypes from "prop-types";

export default function UserAnswer({ text }) {
    return <p>{text}</p>;
}

UserAnswer.propTypes = {
    text: PropTypes.string.isRequired,
};
