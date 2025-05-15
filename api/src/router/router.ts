const router = require('express').Router();
import itemsController from '../controllers/itemsController';
import categoriesController from '../controllers/categoriesController';
const manufacturersController = require('../controllers/manufacturersController');
const ordersController = require("../controllers/ordersController");
const usersController = require("../controllers/usersController");
const rolesController = require("../controllers/rolesController");
const clientsController = require("../controllers/clientsController");
const orderReturnsController = require("../controllers/orderReturnsController");
const enumsController = require("../controllers/enumsController");
const suppliersController = require("../controllers/suppliersController");

/*items router*/
router.get("/items", itemsController.getAllItems);
router.get("/items/:id", itemsController.getItem);
router.get("/items/search/:name", itemsController.searchItemsByName);
router.get("/items/search/category/:category", itemsController.getItemsByCategoryId);
router.get("/items/search/manufacturer/:manufacturer", itemsController.getItemsByManufacturer);
router.get("/items/search/category/:category/manufacturer/:manufacturer", itemsController.getItemsByCategoryIdAndManufacturer);
router.get("/items/search/supplier/:supplierId", itemsController.getItemsBySupplierId);
router.post("/items", itemsController.addItem);
router.put("/items/:id", itemsController.updateItem);
router.post("/items/:id/suppliers", itemsController.addNewArrival);

/*categories router*/
router.get("/categories", categoriesController.getAllCategories);

/*manufacturers router*/
router.get("/manufacturers", manufacturersController.getAllManufacturers);

/*orders router*/
router.get("/orders", ordersController.getAllOrders);
router.get("/orders/search/:orderId", ordersController.searchOrdersById)
router.get("/orders/client/:clientId", ordersController.getOrdersByClientId);
router.get("/orders/:orderId/items", itemsController.getItemsByOrderId);
router.get("/orders/:orderId/returns", orderReturnsController.getReturnedItemsByOrderId);
router.post("/orders", ordersController.addOrder);
router.post("/orders/:orderId/returns", orderReturnsController.addOrderReturn);
router.patch("/orders/returns/:returnId", orderReturnsController.updateReturnStatus);
router.patch("/orders/:orderId", ordersController.updateOrderStatus)

/*users router*/
router.get("/users", usersController.getAllUsers);
router.get("/users/:userId", usersController.getUser);
router.post("/users", usersController.addUser);
router.put("/users/:userId", usersController.updateUser);
router.delete("/users/:userId", usersController.deleteUserById);


/*roles router*/
router.get("/roles", rolesController.getAllRoles);

/*clients router*/
router.get("/clients", clientsController.getAllClients);
router.get("/clients/:clientId", clientsController.getClient);
router.post("/clients", clientsController.addClient);
router.put("/clients/:clientId", clientsController.updateClient);

/*enums router*/
router.get("/enums/returnstatuses", enumsController.getReturnStatuses);
router.get("/enums/returnreasons", enumsController.getReturnReasons);
router.get("/enums/orderstatuses", enumsController.getOrderStatuses)

/*login router*/
router.post("/login", usersController.login);

/*suppliers router*/
router.get("/suppliers", suppliersController.getSuppliers);
router.post("/suppliers", suppliersController.addSupplier);
router.put("/suppliers/:supplierId", suppliersController.updateSupplier);

module.exports = router;