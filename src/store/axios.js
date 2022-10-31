import axios from 'axios'; 

export const cdnURL = 'https://image.tmdb.org/t/p/w500/';
export const baseURL = 'https://api.themoviedb.org/3';
export const apiKey = '?api_key=e1a605664828565933ff8176c865027b';

export const client = axios.create({ baseURL });
client.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWE2MDU2NjQ4Mjg1NjU5MzNmZjgxNzZjODY1MDI3YiIsInN1YiI6IjYzNTY4YTZkZDE4ZmI5MDA3YWIzZDU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CvcL_zTkAeqP3CrRnkuE7tfz8iEf0YHY4FRYswYoi6w';

export const clientURL = {
	popularity: '/discover/movie?sort_by=popularity.desc',
	best: '/discover/movie?primary_release_year=2022&sort_by=vote_average.desc',
	average: '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc',
	kids: '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc',
	detail: '/movie/',
};