import { IMAGES } from '../reducers/imageReducer';

const unsplashKey =
    '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

export function fetchImages(pageNum = 5) {
    return (dispatch, getState) => {
        const state = getState();
        dispatch({ type: IMAGES.LOAD });
        fetch(
            `https://api.unsplash.com/photos/?client_id=${unsplashKey}&per_page=${pageNum}&page=${
                state.page
            }`,
        )
            .then(res => res.json())
            .then(images => {
                dispatch({ type: IMAGES.SUCCESS, payload: images });
            })
            .catch(err => {
                dispatch({ type: IMAGES.ERROR, payload: err });
            });
    };
}
