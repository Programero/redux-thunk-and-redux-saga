import { IMAGES } from '../reducers/imageReducer';
import { fetchImages } from '../../api/fetchImages.js';

export function fetchImagesThunk(perPage = 5) {
    return async (dispatch, getState) => {
        const state = getState();
        dispatch({ type: IMAGES.LOAD });
        try {
            const images = await fetchImages(perPage, state.page);
            dispatch({ type: IMAGES.SUCCESS, payload: images });
        } catch (e) {
            dispatch({ type: IMAGES.ERROR, payload: e });
        }
    };
}
