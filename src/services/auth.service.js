import axios from "axios";
import authHeader from "./auth.header";


export const regester = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios({
                method: 'post',
                url: `${process.env.REACT_APP_URL_API}/regester-or-login`,
                data
            })
            resolve(response)
        } catch (error) {
            reject(error)
        }
    })
}
export const getProfile = async (data) => {
    // console.log(data);
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios({
                method: 'get',
                headers: authHeader(),
                url: `${process.env.REACT_APP_URL_API}/profile-admin`,
                params: data,
            })
            resolve(response)
        } catch (error) {
            reject(error)
        }
    })
}


