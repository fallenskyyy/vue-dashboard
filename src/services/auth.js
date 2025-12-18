import axios from "axios"

const api_url = "http://localhost:3001"
export async function login(login, password) {
    const { data } = await axios.get(`${api_url}/users?login=${login}&password=${password}`)

    if (data.length === 0) {
        throw new Error("Неверный логин или пароль")
    }
    return data[0]
}