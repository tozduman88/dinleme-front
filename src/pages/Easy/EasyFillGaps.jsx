import { useOutletContext } from "react-router-dom";
import FillGapsQuiz from "~/quizzes/FillGapsQuiz/FillGapsQuiz";

export default function EasyFillGaps() {
    const phrases = useOutletContext();
    return (
        <>
            <FillGapsQuiz phrases={phrases} />
        </>
    );
}
