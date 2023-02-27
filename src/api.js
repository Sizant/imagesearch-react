import axios from "axios";

const searchImages = async(term) => {
   const response =  await axios.get('https://api.unsplash.com/search/photos',{
    headers:{
        Authorization:'Client-ID Y8MZpdM2-u6ZB30EF841gHv2QKP-ii6D0TLt3YPbhdI'
    },
    params:{
        query:term
           }
   });
   return response.data.results;
};


export default searchImages;