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
        console.log('TLIO-OTP service start-verify', json);
        return json.success;
    } catch (error) {
        console.error(error);
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
        console.log('TLIO-OTP service check-verify', json);
        return json.success;
    } catch (error) {
        console.error(error);
        return false;
    }
};

module.exports = {
    sendSmsVerification,
    checkVerification,
};
