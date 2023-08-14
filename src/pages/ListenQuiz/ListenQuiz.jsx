import Question from "./components/Quiestion";
// import Results from "./components/Results";
import { phrases } from "../../phrases";

export function ListenQuiz() {
    return (
        <div className="container">
            <Question records={phrases} />

            {/* <Results /> */}
        </div>
    );
}
