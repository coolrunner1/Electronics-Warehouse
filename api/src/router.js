const router = require('express').Router();
const itemsController = require('./controllers/itemsController');
const categoriesController = require('./controllers/categoriesController');
const manufacturersController = require('./controllers/manufacturersController');
const ordersController = require("./controllers/ordersController");
const usersController = require("./controllers/usersController");
const rolesController = require("./controllers/rolesController");
const clientsController = require("./controllers/clientsController");
const orderReturnsController = require("./controllers/orderReturnsController");
const enumsController = require("./controllers/enumsController");

/*items router*/
router.get("/items", itemsController.getAllItems);
router.get("/items/:id", itemsController.getItem);
router.get("/items/search/:name", itemsController.searchItemsByName);
router.get("/items/search/category/:category", itemsController.getItemsByCategoryId);
router.get("/items/search/manufacturer/:manufacturer", itemsController.getItemsByManufacturer);
router.get("/items/search/category/:category/manufacturer/:manufacturer", itemsController.getItemsByCategoryIdAndManufacturer);
router.get("/items/search/supplier/:supplierId", itemsController.getItemsBySupplierId);
router.post("/items", itemsController.addItem);

/*categories router*/
router.get("/categories", categoriesController.getAllCategories);

/*manufacturers router*/
router.get("/manufacturers", manufacturersController.getAllManufacturers);

/*orders router*/
router.get("/orders", ordersController.getAllOrders);
router.get("/orders/client/:clientId", ordersController.getOrdersByClientId);
router.get("/orders/:orderId/items", itemsController.getItemsByOrderId);
router.get("/orders/:orderId/returns", orderReturnsController.getReturnedItemsByOrderId);
router.post("/orders", ordersController.addOrder);
router.post("/orders/:orderId/returns", orderReturnsController.addOrderReturn);

/*users router*/
router.get("/users", usersController.getAllUsers);
router.post("/users", usersController.addUser);
router.put("/users/:userId", usersController.updateUser);
router.delete("/users/:userId", usersController.deleteUserById);


/*roles router*/
router.get("/roles", rolesController.getAllRoles);

/*clients router*/
router.get("/clients", clientsController.getAllClients);

/*enums router*/
router.get("/enums/returnstatuses", enumsController.getReturnStatuses);
router.get("/enums/returnreasons", enumsController.getReturnReasons);

/*login router*/
router.post("/login", usersController.login);

module.exports = router;