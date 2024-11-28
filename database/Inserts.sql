INSERT INTO Category (name, description, parent_id) VALUES
('Computer Parts', 'Category for computer parts', NULL),
('Graphics cards', 'Category for graphics cards', 1),
('Personal computers', 'Category for personal computers', NULL),
('Laptops', 'Category for laptops', 3);

INSERT INTO Client (full_name, phone_number, address, email, city, country, postal_code) VALUES
('John Doe', 978440302, '123 Main St', 'johndoe@example.com', 'New York', 'USA', 10001),
('Jane Smith', 978440301, '456 Elm St', 'janesmith@example.com', 'Los Angeles', 'USA', 90001);

INSERT INTO Role (name, description) VALUES
('Admin', 'Administrator role with full access'),
('Client', 'Standard user role with limited access'),
('Warehouse worker', 'Has access to the information about available items');

INSERT INTO Supplier (name, email, address, city, region, country, postal_code, phone_number) VALUES
('ABC Suppliers', 'abc@example.com', '789 Oak St', 'Chicago', 'IL', 'USA', 60007, 978440307),
('XYZ Suppliers', 'xyz@example.com', '321 Pine St', 'Houston', 'TX', 'USA', 77002, 369121518);

INSERT INTO ClientOrder (client_id, status, timestamp, total_items) VALUES
(1, 'Pending', CURRENT_TIMESTAMP, 5),
(2, 'Processing', CURRENT_TIMESTAMP, 3);

INSERT INTO Item (category_id, model, image_path, status, manufacturer, unit_price, date_of_arrival, units_in_stock, faulty_units) VALUES
(1, 'Smartphone X', 'https://www.apple.com/newsroom/2017/09/the-future-is-here-iphone-x/', 'In Stock', 'ABC Electronics', 599.99, 20220101, 100, 2),
(2, 'Laptop 10', null, 'In Stock', 'Laptops inc.', 19.99, 20220115, 50, 0);

INSERT INTO UserProfile (role_id, client_id, login, password, full_name, email, phone_number, passport) VALUES
(1, 1, 'admin', 'adminpass', 'Admin User', 'admin@example.com', 978440304, 978440307),
(2, 2, 'user', 'userpass', 'Regular User', 'user@example.com', 978440303, 978440307);

INSERT INTO OrderProduct (order_id, item_id, quantity) VALUES
(1, 1, 2),
(2, 2, 1);

INSERT INTO SupplierItem (supplier_id, item_id) VALUES
(1, 1),
(2, 2);

INSERT INTO OrderProductReturn (order_product_id, order_return_id) VALUES
(1, 1),
(2, 2);

INSERT INTO OrderReturn (order_product_return_id, quantity, reason, description, status, return_date) VALUES
(1, 1, 'Defective Product', 'Received a damaged item', 'Received', '2022-01-20'),
(2, 2, 'Wrong Item Sent', 'Received incorrect product', 'Processing', '2022-01-25');

UPDATE Item SET image_path = 'https://www.cnet.com/a/img/resize/c79ffd22bcbdd9f2d24636320a7106fee40716bd/hub/2018/03/06/36c765a0-0766-4cc8-a510-866c06670fbf/iphone-x-web-9073.jpg?auto=webp&fit=crop&height=900&width=1200' WHERE model LIKE '%mar%'
