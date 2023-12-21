import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL;

//get posts request
export const fetchPosts = async() => {
    try{
    const {data} = await axios.get(`${API_URL}?_limit=10`);
        return data;
    }catch(error){
        console.log(error);
    }
};
export const updatePost = async(id, updatedPost) => {
    try{
        const {data} = await axios.put(`${API_URL}/${id}`, updatedPost);
        return data;
    }catch(error){
        console.log(error);
    }
}

export const deletePost = async(id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        return id;
    }catch(error){
        console.log(error);
    }
};

export const createPost = async(newPost) => {
    try {
        const {data} = await axios.post(API_URL, newPost);
        return data;
    } catch (errors) {
        console.log(errors);
    }
}