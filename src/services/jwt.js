const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if(!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        req.userId = decoded.id;
        next();
    });
}

function createJWT(){
    return jwt.sign({ id: 1 }, process.env.SECRET, { expiresIn: 86400 });
}

module.exports = { verifyJWT, createJWT };