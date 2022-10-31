import {client, clientURL } from './axios';

export const getPopularityService = async () => {
    try {
        const res = await client.get(clientURL.popularity);
        return res.data;
    }
    catch (error) {
        return error;
    }
};

export const getAverageService = async () => {
    try {
        const res = await client.get(clientURL.average);
        return res.data;
    }
    catch (error) {
        return error;
    }
};

export const getBestService = async () => {
    try {
        const res = await client.get(clientURL.best);
        return res.data;
    }
    catch (error) {
        return error;
    }
};

export const getKidsService = async () => {
    try {
        const res = await client.get(clientURL.kids);
        return res.data;
    }
    catch (error) {
        return error;
    }
};

