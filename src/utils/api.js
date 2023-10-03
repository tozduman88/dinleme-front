export async function addMyPhrase(data) {
    const url = `http://localhost:3333/api/v1/users/${data.user_id}`;

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

export async function checkOraddUser(data) {
    const url = `http://localhost:3333/api/v1/users`;

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Authorization: `twa-init-data ${data.initData}`,
        },
    });

    if (!response.ok) {
        throw { message: "Could not check user", status: 500 };
    }
}

export async function getCurrentUser(chatId) {
    const response = await fetch(
        `http://localhost:3333/api/v1/users/${chatId}`
    );
    if (!response.ok) {
        throw { message: "Failed to find current user", status: 500 };
    }

    return response.json();
}



export async function getPhrases() {
    const url = `https://e1c6-193-104-145-23.ngrok-free.app/api/v1/phrases`
    const response = await fetch(url);
    if (!response.ok) {
        throw { message: "Failed to fetch phrases", status: 500 };
    }

    return response.json();
}