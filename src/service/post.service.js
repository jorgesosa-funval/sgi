import axios from "axios";
import authService from "./auth-header";
import authHeader from "./auth-header";


const API_URL = "/posts";

const getAllPublicPosts = () => {

    return axios.get(API_URL + "/public");
};

const getAllPrivatePosts = () =>{

    return axios.get(API_URL + "/private", {headers: authHeader () });
};

const postService = {
    getAllPrivatePosts,
    getAllPublicPosts
}

export default postService