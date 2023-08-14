import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { IoPlayCircleSharp } from "react-icons/io5";
import { BsSoundwave } from "react-icons/bs";
import styles from "./AudioPlayer.module.css";

const AudioPlayer = ({ src, autoPlay }) => {
    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const startPlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    useEffect(() => {
        if (audioRef.current && autoPlay) {
            startPlay();
        }
    }, [src, autoPlay]);

    const stopOnEnded = () => {
        setIsPlaying(false);
    };

    return (
        <>
            <audio src={src} ref={audioRef} onEnded={stopOnEnded}></audio>

            <div className="audio-play-btn icon" onClick={startPlay}>
                {isPlaying ? (
                    <BsSoundwave className={styles.icon} />
                ) : (
                    <IoPlayCircleSharp className={styles.icon} />
                )}
            </div>
        </>
    );
};

export default AudioPlayer;

AudioPlayer.propTypes = {
    src: PropTypes.string.isRequired,
    autoPlay: PropTypes.bool.isRequired,
};
