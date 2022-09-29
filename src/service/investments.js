import axios from "axios";
import APIServer from "./APIService";
import { ADMIN_API_URL } from '@env';

const list = async (param) => {
    const response = await APIServer.get('investments', { params: param });
    return response;
}

const getById = async (id) => {
    const response = await APIServer.get(`investments/${id}`);
    return response;
}

export default {
    list,
    getById
}