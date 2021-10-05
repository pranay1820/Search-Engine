import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: "Client-ID E5U8i_UPsBkIkfQiaambfbEinS4NICjk_RkX6RbFCdQ"
    }
})