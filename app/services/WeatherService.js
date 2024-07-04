import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {

    async getWeather() {
        const response = await api.get('api/weather?')
        const nowWeather = new Weather(response.data)
        console.log('🌨️ 🎮' + nowWeather);
    }
}

export const weatherService = new WeatherService()