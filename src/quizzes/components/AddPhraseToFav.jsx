import { addMyPhrase } from "~/utils/api";
import WebApp from "@twa-dev/sdk";

const initDataString = WebApp.initData;
const initData = new URLSearchParams(initDataString);
const user = JSON.parse(initData.get("user"));

export default function AddPhraseToFav({ phraseId }) {
    const add = async () => {
        const data = {
            phrase_id: phraseId,
            user_id: user.id,
        };

        await addMyPhrase(data);
    };
    return (
        <>
            <button onClick={add}>Добавить в "Мои фразы"</button>
        </>
    );
}
