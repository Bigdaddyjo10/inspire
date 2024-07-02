import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class ImageService {

    async getImage() {
        const response = await api.get('api/imgUrl')
        console.log('🌆', response.data);
        const newImage = new Image(response.data)
    }

}

export const imageService = new ImageService