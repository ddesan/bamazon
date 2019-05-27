//Retrieve npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root",
	database: "bamazon"
});

// connect to the mysql server and sql database and run the start function
connection.connect(function (err) {
    
    if (err) 
        throw err;
    
        console.log("connected as id " + connection.threadId);

        start();
});

// Start function to start the query and show all the product catalogue
function start() {

    connection.query("SELECT * FROM products WHERE stock_quantity > 0", function (err, res) {
        
        if (err) throw err;

        console.log("The everything store Bamazon");

        for (var i = 0; i < res.length; i++){
            
            console.log(res[i].item_id + " | " + res[i].product_name + " | " +  res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }

        // Running the inquirer
        inquirer.prompt([
            {
                name: "id",
                type: "input",
                message: "What would you like to buy? (Insert product ID)"
            },
            {
                name: "units",
                type: "input",
                message: "How many units?"
            }
        ]).then(function (answer) {
                
            //Get product based on input
            connection.query("SELECT * FROM products WHERE item_id = " + answer.id + " ; ", function (err,res) {

                if (err) throw error;

                var actual_stock = res[0].stock_quantity;
                var order_stock = answer.units;
                var order_price = res[0].price;

                if (order_stock > actual_stock) {
                    console.log("Not enought stock, there are only " + actual_stock + " available.");
                }
                else {

                    var future_stock = actual_stock - order_stock;

                    connection.query("UPDATE products SET stock_quantity = " + future_stock + " WHERE id = " + answer.id, function(err,res){

                        var total_order = order_price * order_stock;

                        console.log("\nThe total amount of the order is " + total_order);

                        console.log(future_stock);

                    });
                }
                connection.end();
            });
        });
    });
}