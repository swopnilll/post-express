import axios from 'axios'
import { PostsApiEndpoint } from "./config.js";

const fetchPosts = async (limit, offset) => {

    try{
        const posts = await axios.get(PostsApiEndpoint);

        const processedPosts = posts.data.map(post => {
            return {
                id: post.id, 
                title: post.title, 
                body: post.title
            }
        })

        const paginatedPosts = processedPosts.slice(offset, limit + offset);

        return paginatedPosts;

    } catch(error){
        console.error('Error fetching posts:', error);
        throw error;
    }

}

export default fetchPosts;