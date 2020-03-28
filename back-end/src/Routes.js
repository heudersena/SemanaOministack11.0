const router = require("express").Router();

const OngsController = require("./controllers/OngsController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

router.get('/ongs', OngsController.index);
router.post('/ongs', OngsController.store);

router.get('/incidents', IncidentController.index);
router.post('/incidents', IncidentController.store);
router.delete('/incidents/:id', IncidentController.destroy);
router.put('/incidents/:id', IncidentController.update);

router.get('/profile', ProfileController.index);

router.post('/session', SessionController.create);


module.exports = router;