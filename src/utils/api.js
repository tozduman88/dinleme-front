export async function addMyPhrase(data) {
    const url = ` https://57ca-193-104-145-15.ngrok-free.app/api/v1/users/${data.chat_id}`;

    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw { message: "Could not add phrase to My Phrases.", status: 500 };
    }
}
