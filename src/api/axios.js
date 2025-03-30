import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "0965917e7b4c07c05568cacdc336d3e4",
        language: "ko-KR",
    },
});

export default instance;