SELECT * FROM Category;

SELECT * FROM Client;

SELECT * FROM Role;

SELECT * FROM Supplier;

SELECT * FROM ClientOrder;

SELECT * FROM Item;

SELECT * FROM UserProfile;

SELECT * FROM OrderProduct;

SELECT * FROM SupplierItem;

SELECT * FROM OrderReturn;

SELECT * FROM Item WHERE model ILIKE '%lap%' ORDER BY model;

SELECT * FROM Item JOIN Category ON Item.category_id = Category.category_id
	WHERE Item.category_id = 1 OR Category.parent_id = 1;

SELECT OrderReturn.order_return_id, OrderReturn.quantity, reason, description,
            OrderReturn.status, return_date, Item.item_id, model, image_path, manufacturer, unit_price, OrderProduct.order_id
            FROM OrderReturn JOIN OrderProduct ON OrderReturn.order_product_id = OrderProduct.order_product_id
            JOIN Item ON OrderProduct.item_id = Item.item_id WHERE OrderProduct.order_id = 14;

SELECT * FROM ClientOrder WHERE CAST(order_id AS VARCHAR(255)) LIKE '%1%';

SELECT * FROM Item ORDER BY unit_price, model;

UPDATE Item
	   SET units_in_stock = 0
	   WHERE item_id = 4;

UPDATE ClientOrder SET status = 'Delivered' WHERE order_id = 3;

UPDATE ClientOrder SET status = 'Delivered' WHERE order_id = 1;

UPDATE OrderProduct SET quantity = 5 WHERE order_id = 1;

UPDATE ClientOrder SET status = 'Delivered';

UPDATE ClientOrder SET status = 'Delivered';
