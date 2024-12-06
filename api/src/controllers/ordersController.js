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
            res.json;
            /*const id_genre = await db.query(`SELECT "id_жанра" FROM "Жанр" WHERE "название" = $1`, [genre]);
            const id_director = await db.query(`SELECT "id_режиссера" FROM "Режиссеры" WHERE "имя" = $1 AND "фамилия" = $2;`, [director.split(" ")[0], director.split(" ")[1]]);
            const newDate = date.replaceAll(".","-");
            await admin.query(`INSERT INTO "Фильмы" ("название", "id_жанра", "дата_выпуска", "id_режиссера", "рейтинг") VALUES ($1, $2, $3, $4, $5)`, [name, id_genre.rows[0].id_жанра, newDate, id_director.rows[0].id_режиссера, rating]);
            res.json();*/
            console.log(items, userId, itemCount, itemTotal);
        }catch (error) {
            console.log(error)
        }
    }
}

const ordersController = new OrdersController();
module.exports = ordersController;
