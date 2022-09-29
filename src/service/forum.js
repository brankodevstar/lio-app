import APIServer from "./APIService";

const list = async (param) => {
    const response = await APIServer.get('posts', { params: param });
    return response;
}

const getById = async (id) => {
    const response = await APIServer.get(`posts/${id}`);
    return response;
}

const create = async (param) => {
    const response = await APIServer.post(`posts`, param);
    return response;
}

export default {
    list,
    getById,
    create
}