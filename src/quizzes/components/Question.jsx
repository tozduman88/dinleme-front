import PropTypes from "prop-types";
import Counter from "~/components/Counter";
import AudioPlayer from "~/components/AudioPlayer";
import Translation from "./Translation";
import TextArea from "./TextArea";
import { Button } from "~/components/Button";

const Question = ({ phrases }) => {
    let id = 5;
    return (
        <>
            <Counter text="Фраза" currentIndex={1} length={5} />
            <AudioPlayer src={`/audio/${id}.mp3`} autoPlay={true} />
            <Translation text={phrases[4].trans} />
            <TextArea />
            <Button text="Проверить" />
        </>
    );
};

export default Question;
Question.propTypes = {
    phrases: PropTypes.array.isRequired,
};
