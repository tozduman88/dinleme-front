import { IoAddCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import AudioPlayer from "~/components/AudioPlayer";
import styles from "./List.module.css";

export default function List({ phrases }) {
    return (
        <div className={styles.list}>
            {phrases.map((item, i) => (
                <div className={styles.item} key={i}>
                    <AudioPlayer
                        src={`/audio/${item.id}.mp3`}
                        autoPlay={false}
                    />
                    <div className={styles.text}>
                        <p>{item.text}</p>
                        <p>{item.trans}</p>
                    </div>

                    <button className="add-btn icon">
                        <IoAddCircleOutline />
                    </button>
                </div>
            ))}
        </div>
    );
}

List.propTypes = {
    phrases: PropTypes.array.isRequired,
};
