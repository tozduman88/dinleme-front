import { addMyPhrase } from "~/utils/api";
import WebApp from "@twa-dev/sdk";
import { initData } from "@twa.js/init-data";

const initDataString = WebApp.initData;
const myData = initData(initDataString);

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
            {myData}
            <button onClick={add}>Добавить в "Мои фразы"</button>
        </>
    );
}
