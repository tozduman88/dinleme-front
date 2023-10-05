import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import styles from "./ListenPage.module.css";
import WriteDownQuiz from "~/quizzes/WriteDownQuiz/WriteDownQuiz";
import FillGapsQuiz from "~/quizzes/FillGapsQuiz/FillGapsQuiz";

function ListenPage() {
    const data = useOutletContext();
    //key on div to force re-render
    const [key, setKey] = useState(0);
    const [task, setTask] = useState("gaps");
    const [phrases, setPhrases] = useState(
        data.filter((phrase) => phrase.level === "easy")
    );

    const selectLevel = (e) => {
        let items = data.filter((phrase) => phrase.level === e.target.name);
        setPhrases(items);
        setKey((k) => k + 1);
    };

    const selectTask = (e) => {
        setTask(e.target.name);
    };

    return (
        <>
            <div className={styles.block}>
                <p>Сложность:</p>
                <button name="easy" onClick={(e) => selectLevel(e)}>
                    легко
                </button>
                <button name="middle" onClick={(e) => selectLevel(e)}>
                    средне
                </button>
                <button name="hard" onClick={(e) => selectLevel(e)} disabled>
                    сложно
                </button>
            </div>

            <div className={styles.block}>
                <p>Режим:</p>
                <button name="gaps" onClick={(e) => selectTask(e)}>
                    Вставить пропущенные слова
                </button>
                <button name="write" onClick={(e) => selectTask(e)}>
                    Написать фразу
                </button>
            </div>

            <div className="quiz" key={key}>
                {task === "gaps" ? (
                    <FillGapsQuiz phrases={phrases} />
                ) : (
                    <WriteDownQuiz phrases={phrases} />
                )}
            </div>
        </>
    );
}

export default ListenPage;
