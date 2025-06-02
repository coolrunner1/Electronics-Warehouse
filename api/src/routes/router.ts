import categoriesRouter from "./categoriesRouter";
import {Router} from "express";
import clientsRouter from "./clientsRouter";
import suppliersRouter from "./suppliersRouter";
import itemsRouter from "./itemsRouter";
import rolesRouter from "./rolesRouter";
const ordersController = require("../controllers/ordersController");
const usersController = require("../controllers/usersController");
const orderReturnsController = require("../controllers/orderReturnsController");
const enumsController = require("../controllers/enumsController");

const router = Router();

router.use('/api/v1/items', itemsRouter);

router.use('/api/v1/categories', categoriesRouter);

/*orders router*/
router.get("/orders", ordersController.getAllOrders);
router.get("/orders/search/:orderId", ordersController.searchOrdersById)
router.get("/orders/client/:clientId", ordersController.getOrdersByClientId);
router.get("/orders/:orderId/items", ordersController.getItemsByOrderId);
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

router.use("/api/v1/roles", rolesRouter);

router.use("/api/v1/clients", clientsRouter);

router.use("/api/v1/suppliers", suppliersRouter);

/*enums router*/
router.get("/enums/returnstatuses", enumsController.getReturnStatuses);
router.get("/enums/returnreasons", enumsController.getReturnReasons);
router.get("/enums/orderstatuses", enumsController.getOrderStatuses)

/*login router*/
router.post("/login", usersController.login);

export default router;