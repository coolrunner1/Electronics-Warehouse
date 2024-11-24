DROP IF EXISTS Category;

CREATE TABLE Category (
  category_id integer NOT NULL,
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  parent_id integer DEFAULT NULL,
  PRIMARY KEY (category_id)
);

DROP IF EXISTS Client;

CREATE TABLE Client (
  client_id integer NOT NULL,
  fullName varchar(255) NOT NULL,
  phone_number integer NOT NULL,
  address varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  country varchar(255) NOT NULL,
  postal_code integer NOT NULL,
  PRIMARY KEY (client_id)
);

CREATE TABLE Role (
  role_id integer NOT NULL,
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  UNIQUE (name),
  PRIMARY KEY (role_id)
);

CREATE TABLE Supplier (
  supplier_id integer NOT NULL,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  address varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  region varchar(255) NOT NULL,
  country varchar(255) NOT NULL,
  postal_code integer NOT NULL,
  phone_number integer NOT NULL,
  PRIMARY KEY (supplier_id)
);

CREATE TYPE order_status AS enum(
  'Pending',
  'Processing',
  'Shipped',
  'Delivered',
  'Canceled');

CREATE TABLE ClientOrder (
  order_id integer NOT NULL,
  client_id integer NOT NULL,
  status order_status NOT NULL,
  timestamp timestamp NOT NULL,
  total_items integer NOT NULL,
  PRIMARY KEY (order_id),
  CONSTRAINT ClientOrder_Client_foreign
  FOREIGN KEY (client_id) REFERENCES Client (client_id)
);

CREATE TYPE item_status AS enum(
  'In Stock',
  'Out Of Stock'
  );

CREATE TABLE Item (
  item_id integer NOT NULL,
  category_id integer NOT NULL,
  model varchar(255) NOT NULL,
  status item_status NOT NULL,
  manufacturer varchar(255) NOT NULL,
  unit_price float NOT NULL,
  date_of_arrival integer NOT NULL,
  units_in_stock integer NOT NULL,
  faulty_units integer NOT NULL,
  PRIMARY KEY (item_id),
  CONSTRAINT Item_Category_foreign
  FOREIGN KEY (category_id) REFERENCES Category (category_id)
);

CREATE TABLE UserProfile (
  user_id integer NOT NULL,
  role_id integer NOT NULL,
  client_id integer NOT NULL,
  login varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  full_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  phone_number integer NOT NULL,
  passport integer NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE (email),
  UNIQUE (phone_number),
  CONSTRAINT UserProfile_Client_foreign
  FOREIGN KEY (client_id) REFERENCES Client (client_id),
  CONSTRAINT UserProfile_Role_foreign
  FOREIGN KEY (role_id) REFERENCES Role (role_id)
);

CREATE TABLE OrderProduct (
  order_product_id integer NOT NULL,
  order_id integer NOT NULL,
  item_id integer NOT NULL,
  quantity integer NOT NULL,
  PRIMARY KEY (order_product_id),
  CONSTRAINT OrderProduct_Item_foreign
  FOREIGN KEY (item_id) REFERENCES Item (item_id),
  CONSTRAINT OrderProduct_ClientOrder_foreign
  FOREIGN KEY (order_id) REFERENCES ClientOrder (order_id)
);

CREATE TABLE SupplierItem (
  id integer NOT NULL,
  supplier_id integer NOT NULL,
  item_id integer NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT SupplierItem_Supplier_foreign
  FOREIGN KEY (supplier_id) REFERENCES Supplier (supplier_id),
  CONSTRAINT SupplierItem_Item_foreign
  FOREIGN KEY (item_id) REFERENCES Item (item_id)
);

CREATE TABLE OrderProductReturn (
  id integer NOT NULL,
  order_product_id integer NOT NULL,
  order_return_id integer NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT OrderProductReturn_OrderProduct_foreign
  FOREIGN KEY (order_product_id) REFERENCES OrderProduct (order_product_id)
);

CREATE TYPE return_reason AS enum('Defective Product',
    'Wrong Item Sent',
    'Item Not as Described',
    'Changed Mind',
    'Other');

CREATE TYPE return_status AS ENUM (
    'Received',
    'Processing',
    'Refunded',
    'Rejected'
);

CREATE TABLE OrderReturn (
  order_return_id integer NOT NULL,
  order_product_return_id integer NOT NULL,
  quantity integer NOT NULL,
  reason return_reason NOT NULL,
  description varchar(255) NOT NULL,
  status return_status NOT NULL,
  return_date date NOT NULL,
  PRIMARY KEY (order_return_id),
  CONSTRAINT OrderReturn_OrderProductReturn_foreign
  FOREIGN KEY (order_product_return_id) REFERENCES OrderProductReturn (id)
);
