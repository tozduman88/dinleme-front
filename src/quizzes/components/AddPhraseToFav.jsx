import { addMyPhrase } from "~/utils/api";
import WebApp from "@twa-dev/sdk";
// import { initData } from "@twa.js/init-data";
import { retrieveLaunchParams } from "@tma.js/sdk";

const initDataString = WebApp.initData;

export default function AddPhraseToFav() {
    const params = retrieveLaunchParams();
    const add = async ({ phraseId }) => {
        const data = {
            phrase_id: phraseId,
        };

        return console.log("initData", initData(initDataString));
        await addMyPhrase(data);
    };
    return (
        <>
            {params}
            <button onClick={add}>Добавить в "Мои фразы"</button>
        </>
    );
}
