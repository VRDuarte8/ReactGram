import { api, requestConfig } from "../utils/config";

// Publish an user's photo
const publishPhoto = async (data, token) => {
    const config = requestConfig("POST", data, token, true);
  
    try {
      const res = await fetch(api + "/photos", config)
        .then((res) => res.json())
        .catch((err) => err);
  
      return res;
    } catch (error) {
      console.log(error);
    }
};

const photoService = {
    publishPhoto,
    //getUserPhotos,
    //getPhoto,
    //deletePhoto,
    //updatePhoto,
    //like,
    //comment,
    //getPhotos,
    //searchPhotos,
};


export default photoService;