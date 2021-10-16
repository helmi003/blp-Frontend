export const API_URL='http://127.0.0.1:8000'
/**
 * Given an image return the url
 * works for local and deployed strapis
 * @param {any} image
 */
export const fromImageToUrl =(image) =>{
    if (!image){
        return "./vercel.svg"
    }
    if (image.url.indexOf("/")=== 0){
        return `${API_URL}${image.url}`
    }
    return image.url
}