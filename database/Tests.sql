SELECT * FROM OrderProduct;

UPDATE Item
	   SET units_in_stock = 0
	   WHERE item_id = 4;

SELECT * FROM Item;
SELECT last_value FROM order_id_seq;
UPDATE ClientOrder SET status = 'Delivered' WHERE order_id = 3;

UPDATE ClientOrder SET status = 'Delivered' WHERE order_id = 1;
SELECT OrderReturn.order_return_id, OrderReturn.quantity, reason, description, OrderReturn.status, return_date, Item.item_id, model, image_path, manufacturer, unit_price FROM OrderReturn JOIN OrderProduct ON OrderReturn.order_product_id = OrderProduct.order_product_id JOIN Item ON OrderProduct.item_id = Item.item_id WHERE OrderProduct.order_id = 1;
SELECT UNNEST(enum_range(null, null::return_status));

UPDATE OrderProduct SET quantity = 5 WHERE order_id = 1;

UPDATE ClientOrder SET status = 'Delivered';

SELECT Item.item_id, Item.model, Item.image_path, Item.manufacturer, Item.unit_price, OrderProduct.quantity, OrderProduct.returned_units
FROM Item JOIN OrderProduct ON Item.item_id = OrderProduct.item_id WHERE OrderProduct.order_id = 3;
SELECT * FROM UserProfile;

SELECT CAST(order_id AS VARCHAR(255)) FROM ClientOrder;

UPDATE ClientOrder SET status = 'Delivered';
