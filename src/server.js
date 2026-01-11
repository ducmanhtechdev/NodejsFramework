import express from 'express';   // import express

import configViewEngine from "./config/ViewEngine"; // import config view engine (ejs)
import connection from './config/connectDB';
import inItWebRoutes from "./routes/web"; // import routes
import configBodyParser from "./config/configBodyParser";


require('dotenv').config(); 
const app = express(); 
const PORT = process.env.PORT || 4000;  // config port
configBodyParser(app); 
connection(); 
//config view engine; 
configViewEngine(app); 
//init webroutes
inItWebRoutes(app); 
app.listen(PORT, console.log("--------listened-------")); 