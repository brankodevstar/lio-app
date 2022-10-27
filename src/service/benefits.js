import APIServer from './APIService';

const list = async () => {
    const response = await APIServer.get('benefits');
    return response;
};

export default {
    list,
};
