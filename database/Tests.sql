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

SELECT Item.item_id, Item.model, Item.image_path, Item.manufacturer, Item.unit_price, OrderProduct.quantity, OrderProduct.returned_units
FROM Item JOIN OrderProduct ON Item.item_id = OrderProduct.item_id WHERE OrderProduct.order_id = 3;
SELECT * FROM UserProfile;

SELECT CAST(order_id AS VARCHAR(255)) FROM ClientOrder;

UPDATE ClientOrder SET status = 'Delivered';

INSERT INTO UserProfile (role_id, client_id, login, password, full_name, email, phone_number, passport) VALUES
(2, 2, 'newuser', 'userpass', 'Regular User', 'user@example.com', 978440303, 978440307);

SELECT * FROM Item;

SELECT * FROM ClientOrder

INSERT INTO ClientOrder (client_id, status, timestamp, total_items, total_amount) VALUES (1999999999, 'Pending', CURRENT_TIMESTAMP, 10, 1999);
INSERT INTO OrderProduct (order_id, item_id, quantity) VALUES (currval('order_id_seq'), 11, 10);

SELECT * FROM OrderProduct WHERE order_id = 8;

INSERT INTO OrderReturn (order_product_id, quantity, reason, description, status, return_date) VALUES
(currval('order_product_id_seq'), 2, 'Wrong Item Sent', 'Received incorrect product', 'Processing', '2022-01-25');

INSERT INTO OrderProduct (order_id, item_id, quantity) VALUES (19999, 1999999, 2);

SELECT user_id, role_id, login FROM UserProfile WHERE role_id = 4;

SELECT * FROM Role WHERE role_id = 4;

UPDATE Role SET role_id = 3 WHERE role_id = 4;

DELETE FROM Category WHERE category_id = 3;
