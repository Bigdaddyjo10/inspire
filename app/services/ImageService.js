import { AppState } from "../AppState.js"
import { RamImage } from "../models/RamImage.js";
import { api } from "./AxiosService.js"

class ImageService {

    async getImage() {
        const response = await api.get('api/images?largeImgUrl')
        const newImg = new RamImage(response.data)
        AppState.ramImage = newImg
        console.log('🌆', response.data);
    }

}

export const imageService = new ImageService();