import { Outlet, useLoaderData, json } from "react-router-dom";
import { getPhrases } from "~/utils/api";

export async function loader() {
    let phrases = await getPhrases();

    return json(phrases);
}

export function Component() {
    const phrases = useLoaderData();

    return (
        <>
            <Outlet context={phrases} />
        </>
    );
}

Component.displayName = "ListenPageLayout";
