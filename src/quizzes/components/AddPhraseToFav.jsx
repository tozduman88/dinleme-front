import { addMyPhrase } from "~/utils/api";
import WebApp from "@twa-dev/sdk";
import { retrieveLaunchParams } from "@tma.js/sdk";
import { initData } from "@tma.js/init-data";

const initDataString = WebApp.initData;
const myData = initData(initDataString);

export default function AddPhraseToFav() {
    const add = async ({ phraseId }) => {
        const data = {
            phrase_id: phraseId,
        };

        return;
        await addMyPhrase(data);
    };
    return (
        <>
            {myData}
            <button onClick={add}>Добавить в "Мои фразы"</button>
        </>
    );
}
