import { useOutletContext } from "react-router-dom";
import FillGapsQuiz from "~/quizzes/FillGapsQuiz/FillGapsQuiz";

export default function MiddleFillGaps() {
    const phrases = useOutletContext();
    return (
        <>
            <FillGapsQuiz phrases={phrases} />
        </>
    );
}
