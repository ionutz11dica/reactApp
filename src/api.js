import axios from "axios";
export const ROOT = 'http://localhost:4001'

export async function getAllProducts() {
    return await axios.get(`${ROOT}/products`);
}