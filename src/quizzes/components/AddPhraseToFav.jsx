import { addMyPhrase } from "~/utils/api";
import WebApp from "@twa-dev/sdk";
import { initData } from "@tma.js/init-data";

const initDataString = WebApp.initData;

export default function AddPhraseToFav() {
    const add = async ({ phraseId }) => {
        const data = {
            phrase_id: phraseId,
        };

        return console.log(initData(initDataString));
        await addMyPhrase(data);
    };
    return (
        <>
            <button onClick={add}>Добавить в "Мои фразы"</button>
        </>
    );
}
