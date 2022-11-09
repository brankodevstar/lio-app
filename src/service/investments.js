import axios from 'axios';
import APIServer from './APIService';
import {ADMIN_API_URL} from '../../../config';

const list = async () => {
    const response = await APIServer.get('investments');
    return response;
};

const getById = async id => {
    const response = await APIServer.get(`investments/${id}`);
    return response;
};

const getFeaturedInvestments = async () => {
    const response = await APIServer.get('investments/findFeatured');
    return response;
}

export default {
    list,
    getById,
    getFeaturedInvestments,
};
