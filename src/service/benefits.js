import APIServer from './APIService';

const list = async param => {
    const response = await APIServer.get('benefits', {params: param});
    return response;
};

export default {
    list,
};
