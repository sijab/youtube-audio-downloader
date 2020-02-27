import { GET_INFO, GET_URL, START_LOADING, REMOVE_ITEM, RESET_INPUT, ERROR, URL_ARRAY_SEND } from "../action/actionConst";

const initialState = {
    videoObject: [],
    videoUrlArray: [],
    newId: 0,
    urlInput: "",
    loading: false,
    error: false,
    downloadEnd: false
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
            // console.log(action.urlInput);
            console.log(state.videoUrlArray);
            return {
                ...state,
                error: false,
                urlInput: action.urlInput,
                videoUrlArray: [
                    ...state.videoUrlArray,
                    action.urlInput
                ]
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
            console.log("error");
            return {
                ...state,
                loading: false,
                error: true
            }

        case URL_ARRAY_SEND:
            return {
                ...state,
                downloadEnd: action.downloadEnd
            }

        default:
            return state;
    }
}

export default reducer;