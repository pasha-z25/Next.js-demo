import { API_URL } from "./constants";

export async function getDataFromApi(url) {
    const response = await fetch(`${API_URL}${url}`);

    return await response.json();
}

export const getRandomColor = () => {
    const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '';

    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * symbols.length)]
    }

    return color;
}