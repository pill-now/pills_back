const { Router } = require('express');
const mainRouter = Router();

mainRouter.get('/', (req, res) => {
    res.send('main');
});

module.exports = mainRouter;