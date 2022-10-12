
//npm install nodemon
//librería para iniciar aplicaciones tipo js en consola
//se configura en package.json
//  "scripts": {
//    "start": "nodemon app.js
// }


const express = require('express'); //import librería web framework for node.js tiene fatures para web y app mobile
const app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors);

require('dotenv/config'); //librería para leer variables globales de archivo .env
const api = process.env.API_URL;
const connectionString = process.env.CONNECTION_STRING
const logger = require('morgan'); // libreria para loguear requests http API
const mongoose = require('mongoose'); //libreria para conectarse a la base mongodb
const Product = require('./models/product'); 
const Category = require('./models/category');
const User = require('./models/user');
const Order = require('./models/order');
const OrderItem = require('./models/orderItem');

const productsRouter = require('./routers/products');
const categoriesRouter = require('./routers/categories');
const orderItemsRouter = require('./routers/orderItems');
const ordersRouter = require('./routers/orders');
const usersRouter = require('./routers/users');

// metodo express.json es un bodyparser que convierte a json la data q se recibe del FE
//MIDDLEWARE
app.use(express.json());
app.use(logger('tiny')); //display log request in specific format tiny

//ROUTERS
app.use(`${api}/products`, productsRouter)
app.use(`${api}/categories`, categoriesRouter)
app.use(`${api}/orderItems`, orderItemsRouter)
app.use(`${api}/orders`, ordersRouter)
app.use(`${api}/users`, usersRouter)

 
//acento invertido `


//se realiza la conexion a la db antes de iniciar el server

mongoose.connect(connectionString, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    dbName : 'eshop-database'
})
.then(()=> console.log('the database connection is ready'))
.catch((err) => console.log('error in connection', err));

app.listen(3000, () => {
    console.log(connectionString);
    console.log(api);
    console.log('server is running in localhost in port 3000: http://localhost:3000');
})