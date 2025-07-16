import {v2 as cloudinary} from 'cloudinary'
export const UploadImageProvider = {
    provide: 'CLOUDINARY',
    useFactory: () => {
        return cloudinary.config ({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env._API_KEY,
            api_secret: process.env._API_SECRET, 
        })
    }
}

///genera un servicio externo para poder conectarnos con nuestro api key and varibles de entorno 