const db = require("../database");

class OrderReturnsController {
    async getReturnedItemsByOrderId(req, res) {
        let id = req.params.orderId;
        await db.query("SELECT OrderReturn.order_return_id, OrderReturn.quantity, reason, description, " +
            "OrderReturn.status, return_date, Item.item_id, model, image_path, manufacturer, unit_price, OrderProduct.order_id " +
            "FROM OrderReturn JOIN OrderProduct ON OrderReturn.order_product_id = OrderProduct.order_product_id " +
            "JOIN Item ON OrderProduct.item_id = Item.item_id WHERE OrderProduct.order_id = $1;",
            [id], (err, result) => {
                try {
                    if (err) throw err;
                    /*if (result.rowCount === 0) {
                        return res.status(404).json({ NOTFOUND: "No order returns found." });
                    }*/
                    return res.status(200).json(result)
                } catch (e) {
                    console.error(err);
                    return res.status(500).json({ status: "error", message: "Error fetching order returns." });
                }
        });
    }

    async addOrderReturn(req, res) {
        try{
            const {orderProductId, quantity, reason, description} = req.body;
            await db.query("INSERT INTO OrderReturn (order_product_id, quantity, reason, description, status, return_date) VALUES\n" +
                "($1, $2, $3, $4, 'Sent', CURRENT_TIMESTAMP)", [orderProductId, quantity, reason, description])
            return res.status(201).json({status: "success", message: "Return successfully added"});
        } catch (error) {
            console.log(error);
            return res.status(500).json({ status: "error", message: error.message });
        }
    }

    async updateReturnStatus(req, res) {
        const id = req.params.returnId;
        const status = req.body.status;
        await db.query("UPDATE OrderReturn SET status = $1 WHERE order_return_id = $2", [status, id], (err, result) => {
            try {
                if (err) throw err;
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error patching order return." });
            }
        })
    }
}

const orderReturnsController = new OrderReturnsController();
module.exports = orderReturnsController;