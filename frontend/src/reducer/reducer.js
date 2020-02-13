import { GET_INFO, GET_URL, START_LOADING, REMOVE_ITEM } from "../action/actionConst";

const initialState = {
    videoObject: [],
    newId: 0,
    urlInput: "",
    loading: false
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
            console.log(action.urlInput);
            return {
                ...state,
                urlInput: action.urlInput,
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

        default:
            return state;
    }
}

export default reducer;