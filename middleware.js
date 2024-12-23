import {DefaultLimit, DefaultOffset} from "./config.js"


export const authMiddlewareFunction = (req, res, next) => {

    if(req.query.auth_code == 'thisisademoauthcode'){
        req.user = {
            user_id: 1, 
            user_name: "User_One"
        }

        next();
    } else {
        res.send({ 'message': 'You are not authorized' }).status(401);
    }

}


export const validateRequestMiddlewareFunction = (req, res, next) => {
    
    const {limit, offset} = req.query;

    if(!limit){
        req.query.limit = DefaultLimit;
    }

    if(!offset){
        req.query.offset = DefaultOffset;
    }

    req.query.limit = parseInt(req.query.limit, 10);
    req.query.offset = parseInt(req.query.offset, 10);

    next();

}