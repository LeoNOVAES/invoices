import jwt from "jsonwebtoken";

export default class AuthorizationMiddleware {
    static verifyToken(req, res, next) {
        try{
            const authHeader = req.headers.authorization;
            if(!authHeader) throw new Error();

            const tokenWords = authHeader.split(' ');
            
            if(tokenWords.length !== 2) throw new Error();
            
            const [schema, token] = tokenWords;
            
            if(schema !== 'Bearer') throw new Error();
            
            jwt.verify(token, 'secret', (err, decoded) => {
                if (err) throw new Error();
            
                req.userId = decoded.id;
                return next();
            });
        } catch (error) {
            res.status(500).json({ error: 'token malformed!' });
            next(error)
        }
    }
}