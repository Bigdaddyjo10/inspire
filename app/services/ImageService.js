import { AppState } from "../AppState.js"
import { RamImage } from "../models/RamImage.js";
import { api } from "./AxiosService.js"

class ImageService {

    async getImage() {
        const response = await api.get('api/images')
        const newImg = new RamImage(response.data)
        AppState.ramImage = newImg

    }

}

export const imageService = new ImageService();