import axios from 'axios';

// eslint-disable-next-line no-undef
const API_URL = `https://api.feteflex.com/api/waitList/`;

// Add WaitList
const addWaitList = async (userData) => {
    const response = await axios.post(API_URL, userData)
    if (response.data) {
        localStorage.setItem('waitList', JSON.stringify(response.data));
    }
    return response.data
}

const waitListService = {
    addWaitList
}

export default waitListService;