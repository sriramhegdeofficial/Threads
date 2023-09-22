import axios from "axios";


const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_ENDPOINT}/api/v1`;

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: 'Application/json',
    },
    withCredentials: true,
})