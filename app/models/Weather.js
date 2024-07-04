export class Weather {
    constructor(data) {
        this.temp = data.temp
    }


    get WeatherTemplate() {
        return `
        <p>${this.temp}</p>
        `

    }
}