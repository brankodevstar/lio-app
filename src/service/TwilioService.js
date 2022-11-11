import axios from 'axios';
// import { TWILIO_URL } from '@env';
import {TWILIO_URL} from '../../config';

const TwilioService = axios.create({
    baseURL: TWILIO_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const sendSmsVerification = async phoneNumber => {
    try {
        const data = JSON.stringify({
            to: phoneNumber,
            channel: 'sms',
        });

        const response = await fetch(`${TWILIO_URL}/start-verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        });
        const json = await response.json();
        return json.success;
    } catch (error) {
        return false;
    }
};

const checkVerification = async (phoneNumber, code) => {
    try {
        const data = JSON.stringify({
            to: phoneNumber,
            code: code,
        });
        const response = await fetch(`${TWILIO_URL}/check-verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        });
        const json = await response.json();
        return json.success;
    } catch (error) {
        return false;
    }
};

module.exports = {
    sendSmsVerification,
    checkVerification,
};
