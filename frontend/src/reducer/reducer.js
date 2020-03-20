import { GET_INFO, GET_URL, START_LOADING, REMOVE_ITEM, RESET_INPUT, ERROR, URL_ARRAY_SEND, START_DOWNLOAD, MAKE_URLS_ARRAY } from "../action/actionConst";

const initialState = {
    videoArray: [],
    videoUrlArray: [],
    urlInput: "",
    loading: false,
    error: false,
    downloadStart: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_INFO:
            return{
                ...state,
                loading: action.loading,
                videoArray: [
                    ...state.videoArray,
                    {
                        title: action.title,
                        thumbnail: action.thumbnail,
                        duration: action.duration,
                    }
                ]
            }

        case GET_URL:
            console.log(state.videoUrlArray);
            return {
                ...state,
                error: action.error,
                urlInput: action.urlInput,
            }
            
        case MAKE_URLS_ARRAY:
            console.log(state.videoUrlArray);
            if(state.error) return state;
            else {
                return {
                    ...state,
                    videoUrlArray: [
                        ...state.videoUrlArray,
                        action.urlArr
                    ]
                }
            }

        case START_LOADING:
            return {
                ...state,
                loading: action.loading
            }

        case REMOVE_ITEM:
            console.log(state.videoUrlArray);
            return {
                ...state,
                videoArray: state.videoArray.filter((item, index, array) => array[action.remove] !== item),
                videoUrlArray: state.videoUrlArray.filter((item, index, array) =>  array[action.remove] !== item)
            }

        case RESET_INPUT:
            return {
                ...state,
                urlInput: ""
            }

        case ERROR:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            }

        case URL_ARRAY_SEND:
            return {
                ...state,
                downloadStart: action.downloadStart
            }

        case START_DOWNLOAD:
            return{
                ...state,
                downloadStart: action.downloadStart
            }

        default:
            return state;
    }
}

export default reducer;