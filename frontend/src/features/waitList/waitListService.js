import axios from 'axios';

const API_URL = 'http://localhost:5003/api/waitList/';

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