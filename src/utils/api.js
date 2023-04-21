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

export const fetchSingleReview = (review_id) => {
    return gamesAPI.get(`/reviews/${review_id}`).then(({data}) => {
        return data.review
    })
}

export const fetchCommentsByReviewId = (review_id) => {
    return gamesAPI.get(`/reviews/${review_id}/comments`).then(({data}) => {
        return data.comments
    })
}

export const patchReviews = (review_id, adjustByOne) => {
return gamesAPI.patch(`/reviews/${review_id}`, {inc_votes: adjustByOne}).then(({data}) => {
    return data.review
})
}

export const fetchReviewsByCategory = (category_name) => {
    return gamesAPI.get(`/reviews/${category_name}`).then(({data}) => {
        return data.reviews
    })
}