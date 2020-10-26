import client_id from '@constants/client-id';

const getPhotosFromApi = async () => {
    try {
        let response = await fetch(
        `https://api.unsplash.com/photos/?client_id=${client_id}`
        );
        return await response.json();
    } catch (error) {
        Promise.reject(error.message);
        console.error(error);
    }
};

export default getPhotosFromApi;