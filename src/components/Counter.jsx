import PropTypes from "prop-types";

const Counter = ({ text, currentIndex, length }) => {
    return (
        <h4>
            {text} {currentIndex} / {length}
        </h4>
    );
};

export default Counter;

Counter.propTypes = {
    text: PropTypes.string.isRequired,
    currentIndex: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
};
