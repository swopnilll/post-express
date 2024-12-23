import axios from 'axios'
import { PostsApiEndpoint } from "./config.js";

const fetchPosts = async (limit, offset) => {

    try{
        const posts = await axios.get(PostsApiEndpoint);

        const response = posts.data.slice(offset, limit + offset).map(post => {
            return {
                id: post.id, 
                title: post.title, 
                body: post.title
            }
        })

        return response;

    } catch(error){
        console.error('Error fetching posts:', error);
        throw error;
    }

}

export default fetchPosts;