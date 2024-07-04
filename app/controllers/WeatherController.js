import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"

export class WeatherController {
    constructor() {
        this.getWeather()
        AppState.on('user', this.drawWeather)
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
        let weather = AppState.weather
        let weatherHTML = `${weather.WeatherTemplate}`

        console.log(weather, '🌨️ 🎨');


        // (300K − 273.15) × 9 / 5 + 32 = 80.33°F

        setHTML('weather', weatherHTML)
    }


}
function upDateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('time').textContent = timeString;


}
setInterval(upDateTime, 1000)