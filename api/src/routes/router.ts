import itemsController from '../controllers/itemsController';
import categoriesRouter from "./categoriesRouter";
import {Router} from "express";
import clientsRouter from "./clientsRouter";
import suppliersRouter from "./suppliersRouter";
const manufacturersController = require('../controllers/manufacturersController');
const ordersController = require("../controllers/ordersController");
const usersController = require("../controllers/usersController");
const rolesController = require("../controllers/rolesController");
const orderReturnsController = require("../controllers/orderReturnsController");
const enumsController = require("../controllers/enumsController");

const router = Router();

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

router.use('/api/v1/categories', categoriesRouter);

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
router.use("/api/v1/clients", clientsRouter);

router.use("/api/v1/suppliers", suppliersRouter);

/*enums router*/
router.get("/enums/returnstatuses", enumsController.getReturnStatuses);
router.get("/enums/returnreasons", enumsController.getReturnReasons);
router.get("/enums/orderstatuses", enumsController.getOrderStatuses)

/*login router*/
router.post("/login", usersController.login);

export default router;