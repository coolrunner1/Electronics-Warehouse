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
                return res.status(409).json({ status: "error", message: "User with this login or email already exists." });
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

    async getItemsByOrderId(req, res){
        const id = req.params.orderId;
        await db.query("SELECT Item.item_id, Item.model, Item.image_path, Item.manufacturer, Item.unit_price, OrderProduct.quantity " +
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
