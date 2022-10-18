import APIServer from './APIService';

const list = async () => {
    const response = await APIServer.get('announcements');
    return response;
};

export default {
    list,
};
