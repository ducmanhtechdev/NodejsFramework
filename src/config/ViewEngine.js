import express from 'express'; 

// express app
const configViewEngine = (app) => {
app.use(express.static('./public')); 
app.set("view engine", "ejs");   //view engine config
app.set("views", "./src/views");  // define location of file views
}


export default configViewEngine; 