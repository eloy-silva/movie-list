import axios from 'axios';
import { APIkey } from './apiKey';



export const searchMoviesByTitle = async (title) => {
    const { data } = await axios.get(`${APIkey}&s=${title}`);
    return Promise.resolve(data);
}


export const searchMovieById = (id) => {
    return axios.get(`${APIkey}&i=${id}`);
}