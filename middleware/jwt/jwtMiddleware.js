const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers
        const token = authorization.split(' ')[1]
        var decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded.name
        req.email = decoded.email
        next()
    } catch{
        res.status(401).json({
            statusCode: 401,
            message: "Authorization Error"
        })
    }
}

module.exports = jwtMiddleware