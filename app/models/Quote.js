export class Quote {
    constructor(data) {
        this.description = data.content || ''
        this.author = data.author
    }


    get QuoteTemplate() {
        return `
        <div class="m-5 d-flex align-items-center justify-content-center text-light">
            <div class="quote-area">
                <p class="fs-3">${this.description}</p>
                <p class="author">${this.author}</p>
            </div>
    </div>
        `
    }
}




// quote: undefined,
// description: String, required