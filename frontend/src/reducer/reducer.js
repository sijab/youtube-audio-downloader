import { GET_INFO, GET_URL, START_LOADING } from "../action/actionConst";

const initialState = {
    videoObject: [ ],
    urlInput: "",
    loading: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_INFO:
            return{
                ...state,
                loading: action.loading,
                videoObject: [
                    ...state.videoObject,
                    {
                        id: action.id,
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

        default:
            return state;
    }
}

export default reducer;