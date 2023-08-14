import PropTypes from "prop-types";

const Translation = () => {
    return (
        <>
            <a>Посмотреть перевод</a>
        </>
    );
};
export default Translation;

Translation.propTypes = {
    text: PropTypes.string,
};
