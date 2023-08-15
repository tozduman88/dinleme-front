import { IoAddCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import AudioPlayer from "~/components/AudioPlayer";

export default function List({ phrases }) {
    return (
        <div className="phrasesList">
            {phrases.map((item, i) => (
                <div className="phrasesList__item" key={i}>
                    <div className="phraseList__audio">
                        <AudioPlayer
                            src={`/audio/${item.id}.mp3`}
                            autoPlay={false}
                        />
                    </div>
                    <div className="phrasesList__phrase">
                        <p className="turkish">{item.text}</p>
                        <p>{item.trans}</p>
                    </div>
                    <div className="phrasesList__action">
                        <button className="add-btn icon">
                            <IoAddCircleOutline />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

List.propTypes = {
    phrases: PropTypes.array.isRequired,
};
