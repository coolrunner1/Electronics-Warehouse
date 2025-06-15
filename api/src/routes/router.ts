import categoriesRouter from "./categoriesRouter";
import {Router} from "express";
import clientsRouter from "./clientsRouter";
import suppliersRouter from "./suppliersRouter";
import itemsRouter from "./itemsRouter";
import rolesRouter from "./rolesRouter";
import enumsRouter from "./enumsRouter";
import authRouter from "./authRouter";
import usersRouter from "./usersRouter";
import articlesRouter from "./articlesRouter";
const ordersController = require("../controllers/ordersController");
const orderReturnsController = require("../controllers/orderReturnsController");

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

router.use("/api/v1/users", usersRouter);

router.use("/api/v1/roles", rolesRouter);

router.use("/api/v1/clients", clientsRouter);

router.use("/api/v1/suppliers", suppliersRouter);

router.use("/api/v1/enums", enumsRouter);

router.use("/api/v1/articles", articlesRouter);

router.use("/api/v1/auth", authRouter);

export default router;