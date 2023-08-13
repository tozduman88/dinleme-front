import { Button } from "../../components/Button";

export function Home() {
    return (
        <div className="container">
            <h3>Уровень:</h3>
            <Button text="Легко" />
            <Button text="Средне" />
            <Button text="Сложно" />
        </div>
    );
}
