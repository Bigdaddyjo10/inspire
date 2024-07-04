import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"

export class WeatherController {
    constructor() {
        this.getWeather()
        this.drawWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
            console.log('🌨️ ❌');
        }
    }

    drawWeather() {
        const weather = AppState.weather
        let weatherHTML = `${weather.WeatherTemplate}`
        setHTML('weather', weatherHTML)
    }
}