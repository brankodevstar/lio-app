import APIServer from './APIService';

const list = async () => {
    const response = await APIServer.get('announcements');
    return response;
};

const getById = async id => {
    const response = await APIServer.get(`announcements/${id}`);
    return response;
};

const update = async (id, param) => {
    const response = await APIServer.put(`announcements/${id}`, param);
    return response;
};

const increaseLike = async id => {
    const response = await APIServer.put(`announcements/like/${id}`);
    return response;
};

export default {
    list,
    getById,
    update,
    increaseLike,
};
