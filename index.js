import express from "express"

import {authMiddlewareFunction, validateRequestMiddlewareFunction} from './middleware.js'

import fetchPosts from './utils.js'

const app = express();

app.use(authMiddlewareFunction);

app.use(validateRequestMiddlewareFunction);

app.get('/fetch-posts', async (req, res) => {

    try{
        const { limit, offset } = req.query;

        const posts = await fetchPosts(limit, offset);

        res.send(posts);

    } catch(error){
        res.status(400).send({ error: error.message });
    }

})


app.listen(8000, async () => {
    console.log("The App is listening on port 8000!");
});