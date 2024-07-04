import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class QuoteController {
    constructor() {
        this.getQuote()
        AppState.on('user', this.drawQuote)
    }

    async getQuote() {
        try {
            await quoteService.getQuote()
        } catch (error) {
            Pop.error(error)
            console.log('❌ quote');
        }
    }

    drawQuote() {
        const quote = AppState.quote
        let quoteHTML = `${quote.QuoteTemplate}`
        setHTML('quotes', quoteHTML)
    }
}

