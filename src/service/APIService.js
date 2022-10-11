import axios from 'axios';
// import { ADMIN_API_URL } from '@env';
import { ADMIN_API_URL } from '../../config';

export const APIServer = axios.create({
    baseURL: ADMIN_API_URL,
    "Content-Type": "application/json"
});

export default APIServer;

