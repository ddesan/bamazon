DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
	("TV Sharp 55 pulgadas", "TV y Audio", 4999.00, 85),
    ("Radio Toshiba FM/AM", "TV y Audio", 999.00, 10),
    ("Refrigerador Mabe 18 pies", "Electrodomesticos", 9999.00, 5),
    ("Microondas LG 450 HZ", "Electrodomesticos", 1500.00, 3),
    ("Iphone 6s 128GB", "Celulares", 13000.00, 12),
    ("Huawei Y8", "Celulares", 9000.00, 9),
    ("Nintendo JS", "Videojuegos", 5500.00, 10),
    ("XBox 360", "Videojuegos", 6999.00, 20),
    ("Amplificador", "TV y Audio", 699.00, 15),
    ("TV Sony 30 pulgadas", "TV y Audio", 2499.00, 40);

SELECT * FROM products WHERE item_id = 20;