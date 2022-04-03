const { Router } = require('express');
const router = Router();

router.use('/', require('./main'));
router.use('/user', require('./user'));

module.exports = router;