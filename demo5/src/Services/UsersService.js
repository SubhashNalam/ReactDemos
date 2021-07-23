import axios from 'axios';
const USER_API_BASE_URL = "https://jsonplaceholder.typicode.com/users";

class UserService {
    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }
    createUser(user) {
        return axios.post(USER_API_BASE_URL,)
    }
}

export default new UserService();