const router = require('express').Router();
const itemsController = require('./controllers/itemsController');

router.get("/items", itemsController.getAllItems);

module.exports = router;
