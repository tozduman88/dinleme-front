import PropTypes from "prop-types";

const Translation = ({ text }) => {
    return (
        <>
            <p>{text}</p>
        </>
    );
};
export default Translation;

Translation.propTypes = {
    text: PropTypes.string,
};
