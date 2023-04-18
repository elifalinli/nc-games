import axios from 'axios';

const gamesAPI = axios.create({
    baseURL: 'https://projectbackend-elif.onrender.com/api'
});

export const fetchAllReviews = () => {
    return gamesAPI.get('/reviews').then((res) => {
        return res.data.reviews
    })
};

export const fetchCategories = () => {
    return gamesAPI.get('/categories').then(({data}) => {
        return data.categories
    })
}