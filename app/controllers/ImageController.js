import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";

export class ImageController {
    constructor() {
        console.log('🌆 🎮');
        this.getImage
    }


    async getImage() {
        console.log('🌆 🎮 👍');
        try {
            await imageService.getImage()
        } catch (error) {
            Pop.error(error)
            console.log('❌ 🌆');
        }
    }
}