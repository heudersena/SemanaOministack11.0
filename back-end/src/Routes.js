const router = require("express").Router();

router.get('/', (req, res) => {
    res.send({ message: 'router default' });
})


module.exports = router;