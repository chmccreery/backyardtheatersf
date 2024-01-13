import axios from 'axios';

export async function fetchHello() {
    try {
        const response = await axios.get('/api/hello');
        return response.data.mystring;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchWorld() {
    try {
        const response = await axios.get('/api/world');
        return response.data.mystring;
    } catch (error) {
        console.error(error);
    }
}