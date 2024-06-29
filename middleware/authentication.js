const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(){
    return (req,res,next)=>{
        const tokenCookieValue = req.cookie[cookieName];
        if(!tokenCookieValue){
            next();
        }
       try{
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;
        }
        catch (error){ }

        next();
    };
}

module.exports={
    checkForAuthenticationCookie,
}