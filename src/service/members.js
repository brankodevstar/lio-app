import APIServer from './APIService';

const list = async param => {
    const response = await APIServer.get('users', {params: param});
    return response;
};

const getById = async id => {
    const response = await APIServer.get(`users/${id}`);
    return response;
};

const update = async (id, param) => {
    const response = await APIServer.put('users/' + id, param);
    return response;
};

export default {
    list,
    getById,
    update,
};
