const router = require('express').Router();
const itemsController = require('./controllers/itemsController');
const categoriesController = require('./controllers/categoriesController');
const manufacturersController = require('./controllers/manufacturersController');

/*items router*/
router.get("/items", itemsController.getAllItems);
router.get("/items/:id", itemsController.getItem);
router.get("/items/search/:name", itemsController.searchItemsByName);
router.get("/items/search/category/:category", itemsController.getItemsByCategoryId);
router.get("/items/search/manufacturer/:manufacturer", itemsController.getItemsByManufacturer);
router.get("/items/search/category/:category/manufacturer/:manufacturer", itemsController.getItemsByCategoryIdAndManufacturer);
router.get("/items/search/supplier/:supplierId", itemsController.getItemsBySupplierId);

/*categories router*/
router.get("/categories", categoriesController.getAllCategories);

/*manufacturers router*/
router.get("/manufacturers", manufacturersController.getAllManufacturers);

module.exports = router;