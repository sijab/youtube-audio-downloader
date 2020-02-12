import { GET_INFO, GET_URL } from "../action/actionConst";

const initialState = {
    videoObject: [ ],
    urlInput: "",
    urlResponse: ""
};

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_INFO:
            console.log(action.urlResponse);
            return{
                ...state,
                urlResponse: action.urlResponse,
                videoObject: [
                    ...state.videoObject,
                    {
                        id: action.id,
                        title: action.title,
                        thumbnail: action.thumbnail,
                        duration: action.duration,
                        urlResponse: action.urlResponse
                    }
                ]
            }

        case GET_URL:
            console.log(action.urlInput);
            return {
                ...state,
                urlInput: action.urlInput,
            }   

        default:
            return state;
    }
}

export default reducer;