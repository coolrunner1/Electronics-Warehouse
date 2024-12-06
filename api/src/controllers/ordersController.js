const db = require("../database");

class OrdersController {
    async getAllOrders(req, res) {
        await db.query("SELECT * FROM ClientOrder", (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No orders found"});
                }
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching orders." })
            }
        });
    }
    async addOrder(req, res){
        try{
            const {items, userId, itemCount, itemTotal} = req.body;
            await db.query("INSERT INTO ClientOrder (client_id, status, timestamp, total_items, total_amount) VALUES\n" +
                "($1, 'Pending', CURRENT_TIMESTAMP, 5, $2)", [userId, itemTotal])

            for (const item of items) {
                await db.query("INSERT INTO OrderProduct (order_id, item_id, quantity) VALUES\n" +
                    "(currval('order_id_seq'), $1, $2)", [item.item_id, item.numberInCart])
            }
            return res.status(201).json({status: "success", message: "Order successfully added"});
        } catch (error) {
            console.log(error);
            return res.status(500).json({ status: "error", message: "Error adding order." })
        }
    }
}

const ordersController = new OrdersController();
module.exports = ordersController;
