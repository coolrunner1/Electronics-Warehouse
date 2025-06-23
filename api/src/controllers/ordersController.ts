const db = require("../database");

//ToDo: REFACTOR!!!
class OrdersController {
    async getAllOrders(req, res) {
        await db.query("SELECT * FROM ClientOrder ORDER BY order_id DESC", (err, result) => {
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
            const {items, clientId, itemCount, itemTotal} = req.body;

            await db.query("INSERT INTO ClientOrder (client_id, status, timestamp, total_items, total_amount) VALUES\n" +
                "($1, 'Pending', CURRENT_TIMESTAMP, $2, $3)", [clientId, itemCount,itemTotal])

            for (const item of items) {
                await db.query("INSERT INTO OrderProduct (order_id, item_id, quantity) VALUES\n" +
                    "(currval('order_id_seq'), $1, $2)", [item.item_id, item.numberInCart])
            }
            return res.status(201).json({status: "success", message: "Order successfully added"});
        } catch (error) {
            console.log(error);
            if (error.code === '23505') {
                return res.status(409).json({ status: "error", message: "Unique key violation." });
            }
            return res.status(500).json({ status: "error", message: error.message });
        }
    }

    async getOrdersByClientId(req, res){
        const id = req.params.clientId;
        await db.query("SELECT * FROM ClientOrder WHERE client_id = $1 ORDER BY timestamp DESC", [id], (err, result) => {
          try {
              if (err) throw err;
              if (result.rowCount === 0) {
                  return res.status(404).json({NOTFOUND: "No orders found"});
              }
              return res.status(200).json(result);
          } catch (error) {
              console.error(error);
              return res.status(500).json({ status: "error", message: "Error fetching orders." })
          }
        });
    }

    async searchOrdersById(req, res) {
        const id = req.params.orderId;
        await db.query("SELECT * FROM ClientOrder WHERE CAST(order_id AS VARCHAR(255)) LIKE $1", ['%'+id+'%'], (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No orders found"});
                }
                return res.status(200).json(result);
            } catch(err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error fetching orders." });
            }
        });
    }

    async updateOrderStatus(req, res) {
        const id = req.params.orderId;
        const status = req.body.status;
        await db.query("UPDATE ClientOrder SET status = $1 WHERE order_id = $2", [status, id], (err, result) => {
            try {
                if (err) throw err;
                return res.status(200).json(result);
            } catch (err) {
                console.error(err);
                return res.status(500).json({ status: "error", message: "Error patching order." });
            }
        })
    }


    async getItemsByOrderId(req, res){
        const id = req.params.orderId;
        await db.query("SELECT Item.item_id, Item.model, Item.image_path, Item.manufacturer, Item.unit_price, OrderProduct.quantity, OrderProduct.returned_units, order_id, order_product_id " +
            "FROM Item JOIN OrderProduct ON Item.item_id = OrderProduct.item_id WHERE OrderProduct.order_id = $1", [id], (err, result) => {
            try {
                if (err) throw err;
                if (result.rowCount === 0) {
                    return res.status(404).json({NOTFOUND: "No items found"});
                }
                return res.status(200).json(result);
            } catch (error) {
                console.error(error);
                return res.status(500).json({ status: "error", message: "Error fetching items." })
            }
        })
    }
}

const ordersController = new OrdersController();
module.exports = ordersController;
