import APIServer from './APIService';

const list = async param => {
    console.log('parameter ====> ', param);
    const response = await APIServer.get('users', {params: param});
    return response;
};

const getById = async id => {
    const response = await APIServer.get(`users/${id}`);
    return response;
};

export default {
    list,
    getById,
};
