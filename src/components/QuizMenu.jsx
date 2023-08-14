import { Link } from "react-router-dom";
const QuizMenu = () => {
    return (
        <>
            <h3>Режим:</h3>
            <Link to="write-down">
                <button>Записать фразу целиком</button>
            </Link>
            <Link to="fill-gaps">
                <button>Вставлять пропущенные слова</button>
            </Link>
        </>
    );
};

export default QuizMenu;
