import { AppState } from "../AppState.js";
import { RamImage } from "../models/RamImage.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class ImageController {
    constructor() {
        this.getImg()
        console.log('🎮');
        AppState.on('user', this.drawImg)
    }


    async getImg() {

        try {

            console.log('🌆 🎮 👍');
            await imageService.getImage()
        } catch (error) {
            Pop.error(error)
            console.log('❌ 🌆');
        }
    }

    drawImg() {
        const ramImage = AppState.ramImage
        document.body.style.backgroundImage = `url(${ramImage.url})`
    }
}