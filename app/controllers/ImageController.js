import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";

export class ImageController {
    constructor() {
        this.getImg()

        AppState.on('user', this.drawImg)
    }


    async getImg() {

        try {
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