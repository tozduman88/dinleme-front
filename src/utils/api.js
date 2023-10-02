export async function addMyPhrase(data) {
    const url = `https://b60a-193-104-145-23.ngrok-free.app/api/v1/users/${data.user_id}`;

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
    const url = `https://b60a-193-104-145-23.ngrok-free.app/api/v1/users`;

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
