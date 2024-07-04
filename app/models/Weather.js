export class Weather {
    constructor(data) {
        this.temp = data.temp
    }


    get WeatherTemplate() {
        return `
        <p>${this.Fahrenheit}°F</p>
        `
    }

    // class = "checked-box w-25" ${ this.completed ? 'checked' : '' }>
    // (300K − 273.15) × 9 / 5 + 32 = 80.33°F
    get Fahrenheit() {
        return Math.round((this.temp - 273.15) * 9 / 5 + 32)

    }

    //     300K − 273.15 = 26.85°C
    get Celsius() {
        return Math.round((this.temp - 273.15))
    }
}