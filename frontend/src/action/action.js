import { GET_INFO, GET_URL } from './actionConst';
import axios from 'axios';

const sendUrl = (url) => {
    return (dispatch) => {
        axios.post("http://localhost:4200/send", {
            id: url
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: GET_INFO,
                id: response.data.id,
                title: response.data.title,
                thumbnail: response.data.thumbnail,
                duration: response.data.duration,
                urlResponse: response.data.url
            })
        })
    }
}

const getUrl = (url) => {
    return {
        type: GET_URL,
        urlInput: url
    }
}


export {
    sendUrl,
    getUrl
}