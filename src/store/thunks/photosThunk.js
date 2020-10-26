import getPhotosFromApi from '@api/getPhotosFromApi';

import { actions } from '@reducers/photosReducer';

const fetchPhotos = () => async (dispatch) => {
  dispatch(actions.setLoading(true));
  await getPhotosFromApi()
    .then((res) => {
      if (!res) return;
      dispatch(actions.setPhotos(res));
      dispatch(actions.setLoading(false));
    })
    .catch((err) => {
      Promise.reject(err);
    });
};

export default fetchPhotos;
