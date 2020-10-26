export const types = {
  SET_PHOTOS: 'photos/SET_PHOTOS',
  SET_LOADING: 'photos/SET_LOADING',
};

const init = {
  items: [],
  isLoading: true,
};


export default function photosReducer(state = init, action) {
  const { type, payload } = action;
  if (type === types.SET_PHOTOS) {
    return {...state, items: payload};
  }
  else if (type === types.SET_LOADING) {
    return {...state, isLoading: payload}
  }
  return state;
}

export const actions = {
  setPhotos: (photos) => ({ type: types.SET_PHOTOS, payload: photos }),
  setLoading: (loading) => ({ type: types.SET_LOADING, payload: loading })
};
