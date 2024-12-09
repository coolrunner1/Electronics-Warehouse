INSERT INTO Category (name, description, parent_id) VALUES
('Computer Parts', 'Category for computer parts', NULL),
('Graphics cards', 'Category for graphics cards', 1),
('CPUs', 'Category for CPUs', 1),
('RAM', 'Category for RAM', 1),
('HDD/SSD', 'Category for HDDs/SSDs', 1),
('Personal computers', 'Category for personal computers', NULL),
('Laptops', 'Category for laptops', 6),
('Desktops', 'Category for desktops', 6),
('Mobile devices', 'Category for mobile devices', NULL),
('Smartphones', 'Category for smartphones', 9),
('Tablets', 'Category for tablets', 9),
('Miscellaneous', 'Category for miscellaneous items', NULL);

INSERT INTO Client (name, phone_number, address, email, city, country, postal_code) VALUES
('Evil enterprises', 978440302, '123 Main St', 'evil@example.com', 'New York', 'USA', 10001),
('Evil computer parts inc.', 978440301, '456 Elm St', 'janesmith@example.com', 'Los Angeles', 'USA', 90001);

INSERT INTO Role (name, description) VALUES
('Admin', 'Administrator role with full access'),
('Client', 'Standard user role with limited access'),
('Warehouse worker', 'Has access to the information about available items');

INSERT INTO Supplier (name, email, address, city, region, country, postal_code, phone_number) VALUES
('ABC Suppliers', 'abc@example.com', '789 Oak St', 'Chicago', 'IL', 'USA', 60007, 978440307),
('XYZ Suppliers', 'xyz@example.com', '321 Pine St', 'Houston', 'TX', 'USA', 77002, 369121518);

INSERT INTO ClientOrder (client_id, status, timestamp, total_items, total_amount) VALUES
(1, 'Pending', CURRENT_TIMESTAMP, 5, 12.2),
(2, 'Processing', CURRENT_TIMESTAMP, 3, 32.2);

INSERT INTO Item (category_id, model, image_path, status, manufacturer, unit_price, date_of_arrival, units_in_stock, faulty_units) VALUES
(10, 'Smartphone X', '/iphone-x.jpg', 'In Stock', 'ABC Electronics', 599.99, 20220101, 100, 2),
(10, 'Nokia 3310', '/1667.jpg', 'In Stock', 'Nokia', 5.99, 20220101, 10, 2),
(7, 'Laptop 10', '/cheap-laptop.jpg', 'In Stock', 'Laptops inc.', 19.99, 20220115, 50, 0),
(7, 'New Expensive Laptop 17', '/expensive-laptop.jpg', 'In Stock', 'Laptops inc.', 5999.99, 20220115, 500, 0),
(3, 'Intel Core 2 Duo E6300', '/core2duo.jpg', 'In Stock', 'Intel', 4.99, 20220115, 500, 0),
(3, 'Baikal-T1', NULL, 'In Stock', 'Baikal', 4999.99, 20220115, 500, 0),
(2, 'Geforce 210', '/gf210.jpg', 'In Stock', 'Nvidia corp.', 19.99, 20090115, 500, 0),
(2, 'Radeon HD 5450', '/radeon-5450.jpg', 'In Stock', 'AMD', 15.99, 20100115, 100, 0),
(2, 'Geforce 6200', '/geforce-6200.jpg', 'In Stock', 'Nvidia corp.', 4.99, 20040115, 50, 0),
(8, 'Old Decrepit PC', '/old-pc.jpg', 'In Stock', 'Evil Computers corp.', 4.99, 20020115, 5000, 0),
(8, 'New Expensive PC', '/expensive-pc.jpg', 'In Stock', 'Evil Computers corp.', 9999.99, 20240115, 10, 0),
(5, '20Mb Hard Drive', '/Old_wd_hard_disk_03.jpg', 'In Stock', 'Western Digital', 2.99, 19920115, 10, 0);

INSERT INTO UserProfile (role_id, client_id, login, password, full_name, email, phone_number, passport) VALUES
(1, null, 'admin', 'adminpass', 'Admin User', 'admin@example.com', 978440304, 978440307),
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
