import express from "express";
import HomeController from "../controllers/HomeController";
const router = express.Router(); 
// init routes in web nodejs
const inItWebRoutes = (app) => {

// 
router.get("/", HomeController.handleHello); 
router.post('/', HomeController.handleHello); 

    return app.use("/", router); //  parents router 
}
export default inItWebRoutes; 