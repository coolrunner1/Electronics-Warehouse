const router = require('express').Router();
const itemsController = require('./controllers/itemsController');

router.get("/items", itemsController.getAllItems);
router.get("/items/:id", itemsController.getItem);
router.get("/items/search/:name", itemsController.searchItemsByName);
router.get("/items/search/category/:category", itemsController.getItemsByCategoryId);
router.get("/items/search/manufacturer/:manufacturer", itemsController.getItemsByManufacturer);
router.get("/items/search/supplier/:supplierId", itemsController.getItemsBySupplierId);

module.exports = router;