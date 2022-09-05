const express = require('express');
const systemRouter = express.Router();

const statistics = [
	{username: 'alice', student: 0, teacher: 0, subject: 0},
    {username: 'bob', student: 0, teacher: 0, subject: 0},
    {username: 'charlie', student: 0, teacher: 0, subject: 0},
];

const countRequest = (resource) => {
    return (req, res, next) => {
        const statistic = statistics.find(s => s.username === req.user.username);
        statistic[resource] += 1;
        next();
    };
}

systemRouter.get('/statistic', (req, res) => {
    res.json(statistic);
});

module.exports = countRequest;
module.exports = systemRouter;