export async function addMyPhrase(values) {
    const url = `http://localhost:3333/api/v1/users/${values.slug}`;

    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(values),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw { message: "Could not add phrase to My Phrases.", status: 500 };
    }
}
