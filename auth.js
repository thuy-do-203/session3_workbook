const users = require ('./users.js');

const auth = (req, res, next) => {
    if (req.query) {
        const user = users.find (user => user.apiKey = req.query.apiKey);
        if (!user) {
            throw 'Unauthorized!'
        }
        req.user = user;
        next();
    }
}

module.exports = auth