export class Quote {
    constructor(data) {
        this.description = data.content || ''
        this.author = data.author
    }


    get QuoteTemplate() {
        return `
        <div class="d-flex justify-content-center text-light">
            <div class="secret-area">
        <p>${this.description}</p>
    </div>
    </div>
        `
    }
}




// quote: undefined,
// description: String, required
