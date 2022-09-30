import axios from "axios";
import APIServer from "./APIService";
import { ADMIN_API_URL } from '@env';

const list = async () => {
    const response = await APIServer.get('events');
    return response;
}

const getById = async (id) => {
    const response = await APIServer.get(`events/${id}`);
    return response;
}

export default {
    list,
    getById
}