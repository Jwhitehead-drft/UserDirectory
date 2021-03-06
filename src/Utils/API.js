import axios from 'axios';

export default {
    getEmployees: () => axios.get("https://dummy.restapiexample.com/api/v1/employees")
};