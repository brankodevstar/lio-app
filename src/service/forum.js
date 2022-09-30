import APIServer from "./APIService";

const list = async () => {
    const response = await APIServer.get('posts');
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

const update = async (id, param) => {
    const response = await APIServer.put(`posts/${id}`, param);
    return response;
}

export default {
    list,
    getById,
    create,
    update
}