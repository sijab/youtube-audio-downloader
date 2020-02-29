import { GET_INFO, GET_URL, START_LOADING, REMOVE_ITEM, RESET_INPUT, ERROR, URL_ARRAY_SEND, START_DOWNLOAD, MAKE_URLS_ARRAY } from "../action/actionConst";

const initialState = {
    videoObject: [],
    videoUrlArray: [],
    newId: 0,
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
                newId: state.newId + 1,
                videoObject: [
                    ...state.videoObject,
                    {
                        id: state.newId,
                        title: action.title,
                        thumbnail: action.thumbnail,
                        duration: action.duration,
                    }
                ]
            }

        case GET_URL:
            return {
                ...state,
                error: action.error,
                urlInput: action.urlInput,
            }
            
        case MAKE_URLS_ARRAY:
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
            return {
                ...state,
                videoObject: state.videoObject.filter(item => action.remove !== item.id)
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