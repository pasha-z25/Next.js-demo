import { API_URL } from "./constants";

export async function getDataFromApi(url) {
    const response = await fetch(`${API_URL}${url}`);

    return await response.json();
}