
import axios from 'axios';

export const getWeatherData = async (endpoint, measurementSystem, place_id) => {

    const options = {
        method: 'GET',
        url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
        params: {
            place_id,
            timezone: 'auto',
            language: 'en',
            units: measurementSystem
        },
        headers: {
            'x-rapidapi-key': 'f14ded89d4mshd88269cae600e91p1014b8jsnb594ad3f7d0a',
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
