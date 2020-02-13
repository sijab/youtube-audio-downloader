import { GET_INFO, GET_URL, START_LOADING } from './actionConst';
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
                loading: false
            })
        })
    }
}

const getUrl = (url) => {
    return {
        type: GET_URL,
        urlInput: url,
    }
}

const startLoading = () => {
    console.log("type");
    return {
        type: START_LOADING,
        loading: true
    }
}


export {
    sendUrl,
    getUrl,
    startLoading
}