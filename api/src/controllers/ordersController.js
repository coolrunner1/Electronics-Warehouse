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
            const {name, date, rating, genre, director} = req.body;
            const id_genre = await db.query(`SELECT "id_жанра" FROM "Жанр" WHERE "название" = $1`, [genre]);
            const id_director = await db.query(`SELECT "id_режиссера" FROM "Режиссеры" WHERE "имя" = $1 AND "фамилия" = $2;`, [director.split(" ")[0], director.split(" ")[1]]);
            const newDate = date.replaceAll(".","-");
            await admin.query(`INSERT INTO "Фильмы" ("название", "id_жанра", "дата_выпуска", "id_режиссера", "рейтинг") VALUES ($1, $2, $3, $4, $5)`, [name, id_genre.rows[0].id_жанра, newDate, id_director.rows[0].id_режиссера, rating]);
            res.json();
        }catch (error) {
            console.log(error)
        }
    }
}

const ordersController = new OrdersController();
module.exports = ordersController;
