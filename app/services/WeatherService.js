import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {

    async getWeather() {
        const response = await api.get('api/weather?')
        const nowWeather = new Weather(response.data.main)
        AppState.weather = nowWeather
        console.log('🌨️ 🎮' + nowWeather);
    }
}

export const weatherService = new WeatherService()