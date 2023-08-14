import { useOutletContext } from "react-router-dom";
import WriteDownQuiz from "~/quizzes/WriteDownQuiz/WriteDownQuiz";

export default function EasyWriteDown() {
    const phrases = useOutletContext();

    return (
        <>
            <WriteDownQuiz phrases={phrases} />
        </>
    );
}
