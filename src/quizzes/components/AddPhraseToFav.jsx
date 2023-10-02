import { addMyPhrase } from "~/utils/api";
import WebApp from "@twa-dev/sdk";
import { retrieveLaunchParams } from "@tma.js/sdk";

const initDataString = WebApp.initData;

export default function AddPhraseToFav() {
    const add = async ({ phraseId }) => {
        const data = {
            phrase_id: phraseId,
        };

        return console.log("initData", initData(initDataString));
        await addMyPhrase(data);
    };
    return (
        <>
            {initDataString}
            <button onClick={add}>Добавить в "Мои фразы"</button>
        </>
    );
}
