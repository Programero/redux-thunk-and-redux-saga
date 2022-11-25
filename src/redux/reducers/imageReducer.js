//action Types constants
export const IMAGES = {
    LOAD: 'IMAGES_LOAD_START',
    SUCCESS: 'IMAGES_LOAD_SUCCESS',
    ERROR: 'IMAGES_LOAD_ERROR',
};

const initialState = {
    images: [],
    loading: false,
    error: null,
    page: 1,
};

const imageReducer = function(state = initialState, action) {
    switch (action.type) {
        case IMAGES.LOAD:
            return { ...state, loading: true };
        case IMAGES.SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                images: [...state.images, ...action.payload],
                page: state.page + 1,
            };
        case IMAGES.ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default imageReducer;
