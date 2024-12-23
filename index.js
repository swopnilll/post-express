
import express from "express"


const app = express();


app.get('/', async (req, res) => {

    res.send("<h1>Hello World!!!!</h1>")

})

// Using the express object to listen to port 8000 for incoming requests
app.listen(8000, async () => {
    console.log("The App is listening on port 8000!");
});