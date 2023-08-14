import { useOutletContext } from "react-router-dom";
import FillGapsQuiz from "~/quizzes/FillGapsQuiz/FillGapzQuiz";

export default function EasyFillGaps() {
    const phrases = useOutletContext();
    return (
        <>
            <FillGapsQuiz phrases={phrases} />
        </>
    );
}
