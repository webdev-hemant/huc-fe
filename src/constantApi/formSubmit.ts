import { API_ENDPOINT, FORM_KEY } from "@/constants/ApiEndPoints";
import { ISsologin } from "@/constants/Ssologin";
import axios from "axios";

export const formSubmit = async(dataPara: ISsologin) => {
    try {
        const response = await axios.post(`${API_ENDPOINT}/huc-form`, dataPara, {
            headers: {
                Authorization: `Bearer ${FORM_KEY}`
            }
        })
        
        return response
    } catch (error) {
        console.log(error);
    }
}