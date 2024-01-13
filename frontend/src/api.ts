import axios from 'axios';

export async function fetchHello() {
    try {
        const response = await axios.get('/api/hello');
        console.log(response.status)
        console.log(response.data)
        return response.data.mystring;
    } catch (error) {
        console.error(error);
    }
}