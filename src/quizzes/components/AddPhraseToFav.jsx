import { addMyPhrase } from "~/utils/api";
import WebApp from "@twa-dev/sdk";
// import { retrieveLaunchParams } from "@tma.js/sdk";
// import { initData } from "@tma.js/init-data";

const initDataString = WebApp.initData;
const initData = new URLSearchParams(initDataString);
const user = JSON.parse(initData.get("user"));

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
            {user.id}
            <button onClick={add}>Добавить в "Мои фразы"</button>
        </>
    );
}
