import { GET_INFO, GET_URL, START_LOADING, REMOVE_ITEM, RESET_INPUT, ERROR, URL_ARRAY_SEND } from './actionConst';
import axios from 'axios';
import youTubeUrlValidation from '../helpers/urlValidate';

const sendUrl = (url) => {
    if(youTubeUrlValidation(url)) {
        return (dispatch) => {
            axios.post("http://localhost:4200/send", {
                id: url
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_INFO,
                    title: response.data.title,
                    thumbnail: response.data.thumbnail,
                    duration: response.data.duration,
                    error: false
                })
            })
        }
    } else {
        return {
            type: ERROR
        }
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

const removeItem = (value) => {
    return {
        type: REMOVE_ITEM,
        remove: value
    }
}

const resetInput = () => {
    return {
        type: RESET_INPUT,
    }
}

const sendUrlToBackend = (urlArray) => {
    return (dispatch) => {
        axios.post("http://localhost:4200/urlsend", {
            url: urlArray,
            responseType: "blob"
        })
        .then(res => {
            // console.log(res);

            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `test.zip`);
            document.body.appendChild(link);
            link.click();

            dispatch({
                type: URL_ARRAY_SEND,
                downloadEnd: res.data
            })
        })
    }
}



export {
    sendUrl,
    getUrl,
    startLoading,
    removeItem,
    resetInput,
    sendUrlToBackend
}