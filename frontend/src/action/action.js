import { GET_INFO, GET_URL, START_LOADING, REMOVE_ITEM, RESET_INPUT, ERROR, URL_ARRAY_SEND, START_DOWNLOAD, MAKE_URLS_ARRAY } from './actionConst';
import axios from 'axios';
import youTubeUrlValidation from '../helpers/urlValidate';

const sendUrl = (url) => {
    if (youTubeUrlValidation(url)) {
        return (dispatch) => {
            axios.post("http://localhost:4200/send", {
                id: url
            })
                .then(response => {
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
            type: ERROR,
            loading: false,
            error: true
        }
    }
}

const getUrl = (url) => {
    return {
        type: GET_URL,
        error: false,
        urlInput: url,
    }
}

const makeUrlsArray = (url) => {
    return {
        type: MAKE_URLS_ARRAY,
        urlArr: url
    }
}

const startLoading = () => {
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
        axios.post("http://localhost:4200/url-send", { url: urlArray })
        .then(() => {
            const link = document.createElement('a');
            link.href = "http://localhost:4200/get-files";
            document.body.appendChild(link);
            link.click();

            dispatch({
                type: URL_ARRAY_SEND,
                downloadStart: false
            })
        })
    }
}

const startDownload = () => {
    return {
        type: START_DOWNLOAD,
        downloadStart: true
    }
}


export {
    sendUrl,
    getUrl,
    startLoading,
    removeItem,
    resetInput,
    sendUrlToBackend,
    startDownload,
    makeUrlsArray
}