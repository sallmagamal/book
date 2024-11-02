import axios from "axios"

export const getAllBooks= async ()=>{
    try {
        const response= await axios.get('https://upskilling-egypt.com:3007/api/book')
        return response
    } catch (error) {
        console.log(error)
    }
}