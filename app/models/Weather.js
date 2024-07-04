export class Weather {
    constructor(data) {
        this.weather = data.timezone
    }


    get WeatherTemplate() {
        return `
        <p>${this.weather}</p>
        `

    }
}

// name: String,
//     main: undefined,
//         weather: undefined, 